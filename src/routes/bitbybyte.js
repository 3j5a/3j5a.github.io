import getCodeBlocks from "$lib/codeBlocks";

export async function get() {
    let codeBlocks = await getCodeBlocks("bitbybyte");
    return {
        body: { codeBlocks }
    };

}