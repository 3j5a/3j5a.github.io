<script>
    import { Highlight } from "svelte-highlight";
    import grayscale from "svelte-highlight/styles/grayscale";
                
    export let language;
    export let code;
    export let header;
    export let icon;
    export let inline;

</script>

<svelte:head>
  {@html grayscale}
</svelte:head>

<div class="codeblock codeblock-{language.name} inline-{inline}">
  {#if header}
    <header>
      <h5>
        <code>{header}</code>
        {#if icon}
          <i class="{icon}"></i>
        {/if}
      </h5>
    </header>
  {/if}
  <Highlight language={language} code={code} />
</div>

<style>

  h5 {
    margin: 0;
  }

  h5 code {
    font-weight: normal;
  }

  .inline-true {
    display: inline-block !important;
  }

</style>