<script>
    import Nav from "../../components/nav.svelte";
</script>

<svelte:head>
    <title>2TEC | ABOUT US</title>
    <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
</svelte:head>

<Nav />

<div
    class="flex hero justify-center align-middle flex-col bg-nav-bg bg-no-repeat bg-center bg-cover bg-fixe font-inter"
>
    <div
        class="flex flex-col justify-items-center h-2/5 justify-center self-center px-10"
    >
        <h2
            class="items-center text-[64px] lg:text-[128px] font-bold tracking-tighter leading-[89.02%] text-slate-100 self-center lg:text-center text-left font-inter duration-700 animate animate-glow"
        >
            Shoot for the <span class="text-yellow-vivid">stars</span>, <br /> aim
            for the moon.
        </h2>
        <p
            class="text-slate-300 lg:text-center text-left text-[20px] lg:text-[48px] font-medium my-4
                    tracking-tighter md:text-3xl animate animate-glow"
        >
            Where good ideas take place.
        </p>
    </div>
</div>
<!-- Diseñar la otra parte -->
<div class="h-screen bg-about-wallpaper">
    <h2>Hola me llamo Paco</h2>
</div>

<!-- Custom style -->
<style>
    .hero {
        height: calc(100vh - 9vh);
    }

    .animate {
        animation-duration: 0.75s;
        animation-delay: 0.5s;
        animation-name: animate-fade;
        animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
        animation-fill-mode: backwards;
    }

    /* Glow In */
    .animate-glow {
        animation-name: animate-glow;
        animation-timing-function: ease;
    }

    @keyframes animate-glow {
        0% {
            opacity: 0;
            filter: brightness(3) saturate(3);
            transform: scale(0.8, 0.8);
        }
        100% {
            opacity: 1;
            filter: brightness(1) saturate(1);
            transform: scale(1, 1);
        }
    }
</style>
