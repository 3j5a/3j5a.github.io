import getCodeBlocks from "$lib/codeBlocks";

export async function get() {
    let codeBlocks = await getCodeBlocks("typed");
    return {
        body: { codeBlocks }
    };

}