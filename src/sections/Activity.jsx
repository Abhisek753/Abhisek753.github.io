import GitHubCalendar, { createCalendarTheme } from "react-github-calendar";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import GitHubStats from "../components/GitHubStats";

const username = "Abhisek753";

// empty days are dark slate, busy days get brighter violet
const calendarTheme = createCalendarTheme("#8b5cf6", "#1e293b");

export default function Activity() {
  return (
    <Section id="activity" title="GitHub activity">
      <Reveal>
        <div className="card overflow-x-auto p-6 hover:translate-y-0">
          <GitHubCalendar username={username} theme={calendarTheme} fontSize={14} blockSize={14} />
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <GitHubStats username={username} />
      </Reveal>
    </Section>
  );
}
