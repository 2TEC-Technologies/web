<!-- Main navbar -->
<div class="block lg:flex box-border bg-nav-bg items-center justify-between border-b border-gb">
<!-- PASAR LOS BOTONES ABAJO CUANDO lg:ns que
    ARRIBA LOGO 2TEC Y ABAJO LOS BOTONES -->
    
<!-- BORRAR LOS PADDING LEFT Y RIGHT-->
        <div class="nav items-center align-center">
            <div class="flex align-center">
            <h1 class="antialiased text-white">2TEC</h1>
            </div>
            <div> 
                <ul class="flex text-sm items-center justify-end gap-6 content-center">
                    <li class="antialiased text-nav-text"> About Us </li>
                    <li class="antialiased text-nav-text"> News </li>
                    <li class="antialiased text-nav-text"> Work </li>
                    <li class="antialiased rounded-full text-p-button-dark self-center p-button bg-p-button-bg"> Contact </li>
                </ul>
            </div>
        </div>
        
        
</div>
<!-- News navbar -->
<div class="block text-sm lg:flex box-border bg-nav-bg items-center justify-between border-b border-gb">
    <div class="nav items-center align-center">
            <h3 class="text-nav-text"> News title </h3>
            <a href="https://www.google.com" class="text-p-button-bg">Learn more</a>
        </div>
</div>

<style is:global>

    :root {
        --sizes-pageWidth: 1200px;
    }
    
    .nav {
        display: flex;
        justify-content: space-between;
        padding: 10px 36px;
        width: 100%;
        max-width: var(--sizes-pageWidth);
        margin: 0px auto;
        position: relative;
        z-index: 99999;
    }

    .p-button {
        padding: 4px 16px;
    }

</style>