import { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaUsers, FaBook, FaTrophy } from "react-icons/fa";

// Reads your public profile straight from the GitHub API (no token needed).
// We build the cards ourselves because the free stats-image services keep going down.

// Each trophy gets a rank from the thresholds: S, A, B or C.
const trophyRanks = ["S", "A", "B", "C"];
const rankColors = {
  S: "from-yellow-300 to-amber-500",
  A: "from-brand to-accent",
  B: "from-sky-400 to-blue-600",
  C: "from-slate-400 to-slate-600",
};

function getRank(value, thresholds) {
  const i = thresholds.findIndex((t) => value >= t);
  return i === -1 ? null : trophyRanks[i];
}

export default function GitHubStats({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then((r) => r.json()),
    ])
      .then(([user, repos]) => {
        if (!Array.isArray(repos)) throw new Error("rate limited");

        const languages = {};
        repos.forEach((r) => {
          if (r.language) languages[r.language] = (languages[r.language] || 0) + 1;
        });

        setData({
          repos: user.public_repos,
          followers: user.followers,
          stars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
          forks: repos.reduce((sum, r) => sum + r.forks_count, 0),
          years: new Date().getFullYear() - new Date(user.created_at).getFullYear(),
          languages: Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 5),
        });
      })
      .catch(() => setError(true));
  }, [username]);

  if (error) {
    return (
      <p className="text-center">
        Could not load GitHub stats right now.{" "}
        <a href={`https://github.com/${username}`} className="text-accent underline">
          See my GitHub profile
        </a>
      </p>
    );
  }

  if (!data) return <p className="animate-pulse text-center">Loading GitHub stats…</p>;

  const stats = [
    { label: "Repositories", value: data.repos, icon: FaBook },
    { label: "Stars earned", value: data.stars, icon: FaStar },
    { label: "Followers", value: data.followers, icon: FaUsers },
    { label: "Forks", value: data.forks, icon: FaCodeBranch },
  ];

  // [title, value, thresholds for S, A, B, C]
  const trophies = [
    ["Repositories", data.repos, [100, 50, 20, 5]],
    ["Followers", data.followers, [200, 100, 30, 10]],
    ["Stars", data.stars, [100, 30, 10, 1]],
    ["Languages", data.languages.length, [5, 4, 3, 1]],
    ["Experience", data.years, [5, 3, 2, 1]],
  ]
    .map(([title, value, thresholds]) => ({ title, value, rank: getRank(value, thresholds) }))
    .filter((t) => t.rank);

  const totalLangRepos = data.languages.reduce((sum, [, n]) => sum + n, 0);

  return (
    <div className="space-y-8">
      {/* stat cards */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-6 text-center">
            <Icon className="mx-auto mb-3 text-2xl text-accent" />
            <p className="text-3xl font-extrabold text-white">{value}</p>
            <p className="mt-1 text-sm">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* top languages */}
        <div className="card p-6 hover:translate-y-0">
          <h3 className="mb-5 font-semibold text-white">Top languages</h3>
          <div className="space-y-4">
            {data.languages.map(([lang, count]) => {
              const percent = Math.round((count / totalLangRepos) * 100);
              return (
                <div key={lang}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{lang}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-brand to-accent"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* trophies */}
        <div className="card p-6 hover:translate-y-0">
          <h3 className="mb-5 flex items-center gap-2 font-semibold text-white">
            <FaTrophy className="text-accent" /> Trophies
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {trophies.map((t) => (
              <div key={t.title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:scale-105">
                <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${rankColors[t.rank]} text-xl text-slate-950`}>
                  <FaTrophy />
                </div>
                <p className="text-xs font-bold text-white">Rank {t.rank}</p>
                <p className="text-sm">{t.title}</p>
                <p className="text-xs text-accent">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
