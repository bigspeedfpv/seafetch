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

const voidLinux = `\x1b[32m                __.;=====;.__                  
\x1b[32m            _.=+==++=++=+=+===;.               
\x1b[32m             -=+++=+===+=+=+++++=_             
\x1b[32m        .     -=:\`\`     \`--==+=++==.        
\x1b[32m       _vi,    \`            --+=++++:         
\x1b[32m      .uvnvi.       _._       -==+==+.         
\x1b[32m     .vvnvnI\`    .;==|==;.     :|=||=|.       
\x1b[32m+QmQQmpvvnv; _yYsyQQWUUQQQm #QmQ#:QQQWUV$QQm.  
\x1b[32m -QQWQWpvvowZ?.wQQQE==<QWWQ/QWQW.QQWW(: jQWQE  
\x1b[32m  -$QQQQmmU'  jQQQ@+=<QWQQ)mQQQ.mQQQC+;jWQQ@'  
\x1b[32m   -$WQ8YnI:   QWQQwgQQWV\`mWQQ.jQWQQgyyWW@!   
\x1b[32m     -1vvnvv.     \`~+++\`        ++|+++       
\x1b[32m      +vnvnnv,                 \`-|===         
\x1b[32m       +vnvnvns.           .      :=-          
\x1b[32m        -Invnvvnsi..___..=sv=.     \`          
\x1b[32m          +Invnvnvnnnnnnnnvvnn;.               
\x1b[32m            ~|Invnvnvvnvvvnnv}+\`              
\x1b[32m               -~|{*l}*|~                      `