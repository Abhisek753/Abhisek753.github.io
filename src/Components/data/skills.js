
import { SiChakraui } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";


export const SkillsData=[
    {
        type:"Frontend",
        list:[
            {
                name:"ReactJs",
                icon:<i class="devicon-react-original colored"></i>
            },
            {
                name:"JavaScript",
                icon:<i class="devicon-javascript-plain colored"></i>
            },
            {
                name:"TypeScript",
                icon:<i class="devicon-typescript-plain colored"></i>
            },

            {
                name:"HTML",
                icon:<i class="devicon-html5-plain-wordmark colored"></i>
            },
            {
                name:"CSS",
                icon:<i class="devicon-css3-plain-wordmark colored"></i>
            },
            {
                name:"Redux",
                icon:<i class="devicon-redux-original colored"></i>
            },
            {
                name:"ChakraUI",
                icon:<SiChakraui/>
            },
        ]
    },
    {
      type:"Backend",
      list:[
        {
            name:"mongoDB",
            icon:<i class="devicon-mongodb-plain-wordmark colored"></i>
        },
        {
            name:"Nodejs",
            icon:<i class="devicon-nodejs-plain-wordmark colored"></i>
        },
      ]
    },
    {
        type:"Tools",
        list:[
          {
              name:"Vs Code",
              icon:<i class="devicon-vscode-plain colored"></i>
          },
          {
              name:"GitHub",
              icon:<i class="devicon-github-original colored"></i>
          },
          {
            name:"SandBox",
            icon:FiCodesandbox
        },
        {
            name:"Codepen",
            icon:<i class="devicon-codepen-plain"></i>
        },
        ]
      }
]