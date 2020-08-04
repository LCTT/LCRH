#!/usr/bin/env node
const args = process.argv;
const url = args[2];
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const util = require("hexo-util");
const fs = require("fs");

async function getContent(url) {
  console.log(`Ready to Process URL:${url}`)
  let data = await fetch(url).then((response) => response.text());
  console.log(`Generate Dom for:${url}`)
  const $ = cheerio.load(data);
  const title = $("title").text();
  const slug = util.slugize(title,{transform: 1});
  const transcriptHtml = $.html("div#transcript") || $.html("div#transcript-tray");
  
  if(!transcriptHtml){
    
    console.log("No transcript founded")
    return
  }

  let turndownService = new TurndownService()
  console.log(`Transfer to Markdown:${title}`)
  var markdown = turndownService.turndown(transcriptHtml)

  return {
    slug,
    markdown,
    title
  }
}
async function exportFile(content){
  let fileContent = `[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (${content.title})
[#]: via: (${url})
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

${content.title}
======
${content.markdown}

--------------------------------------------------------------------------------

via: ${url}

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
`
  console.log(`Write to file: ${content.slug}.md`)
  fs.writeFileSync(`sources/${content.slug}.md`,fileContent);
}

/**
 * 判断参数是否符合要求
 */
if (!url) {
  console.log("Please input a url");
  return;
}
/**
 * 进入链式处理
 */
getContent(url).then(exportFile);
