import chalk from "chalk"

export const getArt = (distro: string): string => {
    var art: string = ""
    
    if (distro.includes("Arch")) art = archLinux
    else if (distro.includes("Manjaro")) art = manjaro
    else if (distro.includes("Ubuntu")) art = ubuntu
    else if (distro.includes("Void")) art = voidLinux

    return art
}

const archLinux = chalk.blue(`                  ▄                  
                 ▟█▙                 
                ▟███▙                
               ▟█████▙               
              ▟███████▙              
             ▂▔▀▜██████▙             
            ▟██▅▂▝▜█████▙            
           ▟█████████████▙           
          ▟███████████████▙          
         ▟█████████████████▙         
        ▟███████████████████▙        
       ▟█████████▛▀▀▜████████▙       
      ▟████████▛      ▜███████▙      
     ▟█████████        ████████▙     
    ▟██████████        █████▆▅▄▃▂    
   ▟██████████▛        ▜█████████▙   
  ▟██████▀▀▀              ▀▀██████▙  
 ▟███▀▘                       ▝▀███▙ 
▟▛▀                               ▀▜▙`)

const manjaro = chalk.green(`██████████████████  ████████
██████████████████  ████████
██████████████████  ████████
██████████████████  ████████
████████            ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████`)


const ubuntu = `\x1b[33m                          ./+o+-       
\x1b[33m                  yyyyy- -yyyyyy+    
\x1b[33m               ://+//////-yyyyyyo  
\x1b[33m           .++ .:/++++++/-.+sss/\` 
\x1b[33m         .:++o:  /++++++++/:--:/-     
\x1b[33m        o:+o+:++.\`..\`\`\`.-/oo+++++/    
\x1b[33m       .:+o:+o/.          \`+sssoo+/    
\x1b[33m  .++/+:+oo+o:\`             /sssooo.
\x1b[33m /+++//+:\`oo+o               /::--:.
\x1b[33m \+/+o+++\`o++o               ++////.
\x1b[33m  .++.o+++oo+:\`             /dddhhh.
\x1b[33m       .+.o+oo:.          \`oddhhhh+    
\x1b[33m        \+.++o+o\`$\`-\`\`\`\`.:ohdhhhhh+    
\x1b[33m         \`:o+++ \`ohhhhhhhhyo++os:     
\x1b[33m           .o:\`.syhhhhhhh/.oo++o\`  
\x1b[33m               /osyyyyyyo++ooo+++/     
\x1b[33m                   \`\`\`\`\` +oo+++o\:     
\x1b[33m                          \`oo++.      `

const voidLinux = ``