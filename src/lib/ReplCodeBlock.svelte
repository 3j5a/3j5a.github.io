<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import julia from "svelte-highlight/languages/julia";
    import java from "svelte-highlight/languages/java";

    export let code;
    export let language;

</script>

<CodeBlock language={language === "java" ? java : julia} code={code}></CodeBlock>