import getCodeBlocks from "$lib/codeBlocks";

export async function get() {
    let codeBlocks = await getCodeBlocks("wayback");
    return {
        body: { codeBlocks }
    };

}