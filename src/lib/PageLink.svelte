<script>
    import { base } from '$app/paths';
    export let title;
	export let page;
</script>

<header>
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
    }

    .reference i {
        font-size: 0.75em;
        color: rgb(188, 188, 188);
    }
</style>