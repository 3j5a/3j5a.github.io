<script>
    import { base } from '$app/paths';
    export let title;
	export let page;
</script>

<header class="page-link">
    <h4 class="reference">
        <a href="{base}/{page}">
            <i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-xmark"></i>
            {title}
        </a>
    </h4>
</header>

<style>
    a {
        font-weight: bolder;
        display: inline-block;
        padding: 0 3px 1px;
        min-width: fit-content;
    }

    .reference i {
        color: var(--reference-color);
        min-width: 0.5em;
    }

    .reference span {
        display: inline-block;
        min-width: 2em;
    }
</style>