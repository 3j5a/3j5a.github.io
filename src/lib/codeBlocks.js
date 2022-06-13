import { readdir } from 'fs/promises';
import to_vfile from 'to-vfile';
const { read } = to_vfile;


const baseDir = "src/codeblocks";
const languages = ["java", "javascript", "julia"];

export default async function getCodeBlocks(page) {
    let codeBlocksFileNamePromises = await Promise.allSettled(languages.map(lang => {
        return {lang: lang, dir: `${baseDir}/${lang}/${page}`}
    }).map(langDir => readdir(langDir.dir).then((fileNames) => {
                return {language: langDir.lang, files: fileNames.map(fileName => `${langDir.dir}/${fileName}`)}})));
    
    let codeBlocksPromises = await Promise.allSettled(codeBlocksFileNamePromises
                            .filter(pageCodeBlocksPromise => pageCodeBlocksPromise.status === "fulfilled")
                                .map(pageCodeBlocksPromise => pageCodeBlocksPromise.value)
                                   .flatMap(pageCodeBlocks => {
                                       let lang = pageCodeBlocks.language;
                                       return Promise.allSettled(pageCodeBlocks.files.map(file =>                                            
                                                read(file, "utf8").then((vFile) => {return {language: lang, code: vFile.contents, fileName: file.substring(file.lastIndexOf("/") + 1)};})
                                       ))
                                   }));

    let codeBlocks = codeBlocksPromises.filter(codeBlocksPromise => codeBlocksPromise.status === "fulfilled")
                        .flatMap(codeBlocksPromise => codeBlocksPromise.value.map(v => v.value))
                          .reduce((a, b) => (a[b.language].push({fileName: b.fileName, code: b.code}), a),
                                                {java: [], javascript: [], julia: []});
    
    return codeBlocks;
}