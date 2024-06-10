
const fs = require('fs');

const data = {
  "Table_of_Contents": [
    {
      "1_Introduction": [
        "1_Linux_Structure",
        "2_Linux_Distributions",
        "3_Introduction_to_Shell"
      ]
    },
    {
      "2_The_Shell": [
        "1_Prompt_Description",
        "2_Getting_Help",
        "3_System_Information"
      ]
    },
    {
      "3_Workflow": [
        "1_Navigation",
        "2_Working_with_Files_and_Directories",
        "3_Editing_Files",
        "4_Find_Files_and_Directories",
        "5_File_Descriptors_and_Redirections",
        "6_Filter_Contents",
        "7_Regular_Expressions",
        "8_Permission_Management"
      ]
    },
    {
      "4_System_Management": [
        "1_User_Management",
        "2_Package_Management",
        "3_Service_and_Process_Management",
        "4_Task_Scheduling",
        "5_Network_Services",
        "6_Working_with_Web_Services",
        "7_Backup_and_Restore",
        "8_File_System_Management",
        "9_Containerization"
      ]
    },
    {
      "5_Linux_Networking": [
        "1_Network_Configuration",
        "2_Remote_Desktop_Protocols_in_Linux"
      ]
    },
    {
      "6_Linux_Hardening": [
        "1_Linux_Security",
        "2_Firewall_Setup",
        "3_System_Logs_and_Monitoring"
      ]
    },
    {
      "7_Linux_Distributions_vs_Solaris": [
        "1_Solaris"
      ]
    },
    {
      "8_Tips_&_Tricks": [
        "1_Shortcuts"
      ]
    }
  ]
};

function createFoldersAndFiles(toc, basePath = '') {
  let folderCounter = 1;
  let fileCounter = 1;

  for (const section of toc) {
    for (const key in section) {
      const sectionPath = `${basePath}/${folderCounter}_${key.replace(/ /g, '_')}`;
      fs.mkdirSync(sectionPath, { recursive: true });
      for (const topic of section[key]) {
        if (typeof topic === 'object') {
          for (const subKey in topic) {
            const subSectionPath = `${sectionPath}/${fileCounter}_${subKey.replace(/ /g, '_')}.md`;
            fs.writeFileSync(subSectionPath, '');
            fileCounter++;
          }
        } else {
          const topicPath = `${sectionPath}/${fileCounter}_${topic.replace(/ /g, '_')}.md`;
          fs.writeFileSync(topicPath, '');
          fileCounter++;
        }
      }
      folderCounter++;
    }
  }
}

createFoldersAndFiles(data.Table_of_Contents, 'linux_fundamentals');

console.log('Folders and files created successfully!');

