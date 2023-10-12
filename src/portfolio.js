/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prudhvi Goud Katta",
  title: "Hi all, I'm Prudhvi",
  subTitle: emoji(
"A prolific GIS developer unlocking new possibilities by customizing diverse applications"
    ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PruthviKatta",
  linkedin: "https://www.linkedin.com/in/prudhvi-goud-katta/",
  gmail: "prudhvikatta7@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer & DevOps Engineer having about 5 years of experience in developing various web & desktop applications using C#,ADO.Net, MVVM, WCF Services, ArcObjects, ArcGIS Pro SDK,  ArcFM, SQL Server 2008, Python, AWS, HTML, CSS. Strong grasp of end-user requirements and full Software Development Life Cycle.",
  skills: [
    emoji(
      "⚡ Expertise in requirement analysis and develop GIS applications."
    ),
    emoji("⚡ Knowledgeable in managing versions in ArcSDE environment."),
    emoji(
      "⚡  Experience in DevOps, Continuous Integration and Continuous Delivery (CI/ CD) practices, principles and methodologies."
    ),
    emoji("⚡ Automated and optimized critical deployments using C#, ADO .Net, SQL Server 2008, ArcObjects, Jenkins, CI/CD Pipelines."),
   
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California state university",
      logo: require("./assets/images/csulb.png"),
      subHeader: "Master of Science in Computer ScienceMasters in Geographic Information Science",
      duration: "August 2022 - August 2023",
      desc: ["Produced a precise Digital Elevation Model (DEM) of Historical LosAngeles landscape, enabling automatic extraction of elevation data from high-resolution maps using Trimble eCognition.", "Participated in research project on improving STEM education by integrating Geospatial Technologies into K-8 Mathematics Curriculum","Built a demographic dashboard using ArcGIS Dashboards for MSGISci alumni network to display student demographics, improving alumni engagement and outreach strategies","Co Author for the research paper."],
      descBullets: ["Title :   The effects of COVID-19 on park visitation in Los Angeles County, California", 
      ],
     // desc: "Built a demographic dashboard using ArcGIS Dashboards for MSGISci alumni network to display student demographics, improving alumni engagement and outreach strategies",

      }, 
    {
      schoolName: "Andhra University",
      logo: require("./assets/images/and.png"),
      subHeader: "Bachelor’s in Geo-Informatics",
      duration: "September 2013 - May 2017",
      desc: ["Ranked top 10% in the program. Took courses about Geographical information scienes , Mapping, Navigation, remote sensing","Part of Geo Web-Based Facility Mapping for Zone-2 in GVMC project"],
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Analyst ",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.jpeg"),
      date: "Jan 2022 – July 2022",
      descBullets: 
        ["Developed a tool to extract metadata from the Telecom network depending on request type from other components using JSON and XML.",
        "Involved in designing and implementing enterprise-grade architecture for Telecom Utility project. Played a major role in upgrading existing project tools with latest Ericsson tools, schematics, NE Integration Assistant, and Oracle database.", 
        "Created, configured, and maintained infrastructure on AWS Cloud Services including Virtual Private Cloud (VPC), IAM, EC2, S3, RDS, Route53, EFS, ELB, SNS, ECS, EKS CloudFront, CloudWatch.",
      "Built end-to-end DevOps pipeline using source tools like GitHub, Maven, Ansible and Cloud for application deployment.", 
        "Actively engaged and developed various GIS based applications including Electric and Telecom Utility projects, and addressed the technical issues reported by customers.",
      
        "Created Docker images for automating end-to-end application installation.",
      ]
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.jpeg"),
      date: "Dec 2019 – Jan 2022",
      descBullets: ["Automated and optimized critical deployments using PowerShell scripting and DevOps pipeline.", "Created various customized tools for ArcGIS Pro and ArcFM meeting the deadlines on right time.", "Monitored and analyzed application’s performance in real-time and logs with ELK Stack. Developed metadata extraction tool using ArcObjects.", "Achieved 95% score on customer satisfaction in developing various customized GIS based Applications for Electric and Telecom Utility projects.", "Knowledge in writing Technical and Developer Notes provided with clear understanding on the work/ task assigned.", "Packaged application code into a docker container for easy deployment and scaling.", "Automated provisioning, configuration management and application deployment using DevOps tools like Maven, Ansible."]
    },
    {
      role: "Assistant Systems Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.jpeg"),
      date: "Dec 2017 – Dec 2019",
      descBullets: ["Developed a tool that generates an excel file containing topology details for Telecom domain.", "Responsible for developing models in Model Builder and deploying them in respective environments.", "Performed system maintenance and upgrades, including patches, service packs, hot fixes and new security configurations.", "Maintained network of 30+ Unix servers with 99.95% up-time.", "Built, maintained, supported and migrated environments in Linux and Windows servers for Production, UAT , E2E and Development.", "Experienced in handling JSON and XML message formats."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Participated in EOFactory.AI Private Ltd visEOnary program",
  projects: [
    {
      image: require("./assets/images/eo.png"),
      projectName: "visEOnary",
      projectDesc: ["Collaborated with global GIS users through Workshare Feature and collaborated on diversified Earth Observation (EO) projects for analyzing and storing GIS data on the EOfactory Cloud Platform", "Created content on geospatial analysis and generated maps for different Earth observation applications including agriculture, water resources, and disaster management." ],
      footerLink: [
        {
          name: "SampleWork",
          url: "https://www.linkedin.com/posts/prudhvi-goud-katta_eofactory-viseonary-geospatial-activity-6830365939075297280-ZipK/?utm_source=share&utm_medium=member_desktop/"
        }
        //  you can add extra buttons here.
      ]
    },
  
    {
      image: require("./assets/images/csulb.png"),
      projectName: "Proof of Concept of Indoor Mapping for a University Building",
      projectDesc: "Implementing ArcGIS Indoors for California State University Long Beach",
      footerLink: [
        {
          name: "Porject Story map",
          url: "https://storymaps.arcgis.com/stories/31122ceb85124b318df5c55e9c2e04d1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Special Initiative Award",
      subtitle:
        "Recognized as Star Of The Month for invaluable contribution to team’s success by showing extensive support and training of new team members",
      image: require("./assets/images/tcs.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1YbrdDzvQDKLb_bQO2D8TvEsrsNusb-jQ/view"
        },
       
      ]
    },
    {
      title: "On The Spot Award ",
      subtitle:
        "Also awarded On The Spot Award in recognition for taking complete ownership of assigned projects, often completing them ahead of schedule under minimal supervision.",
      image: require("./assets/images/tcs.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1higfWgpVEtoUHPOjY6QtZcUn7_a1JJc2/view"
        }
      ]
    },

    {
      title: " Kubernetes Administrator ",
      subtitle: "Completed Certifcation from cloud native foundation for Kubernetes Administrator",
      image: require("./assets/images/kube.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1lOSFg6MxAVC553h3fKOTVSRFWKvE0wFD/view"
        }
      ]
    },

    {
      title: "AWS Solutions Architect Associate",
      subtitle: "Completed Certifcation from AWS for PWA Web App Development",
      image: require("./assets/images/aws.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "View certificate",
          url: "https://drive.google.com/file/d/1N4ijUVwquAc9b5zwCIuorPuKuETtFb5t/view"
        }
      ]
    },

    {
      title: "Part 107 Drone Pilot License",
      subtitle: "Completed Certifcation from Federal Aviation Administration for Part 107 Drone Pilot License",
      image: require("./assets/images/drone.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(562)-336-0712",
  email_address: "prudhvikatta7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
