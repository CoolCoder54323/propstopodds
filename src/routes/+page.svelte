<script>
    import CTA from './CTA.svelte'
    import NavigationBar from './NavigationBar.svelte';
    import QueryBox from './QueryBox.svelte';

    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0
    // export let data;

    let mydata;


  </script>

  <svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />


<div class="main-d dark min-h-screen bg-gray-800 pt-2">
    <div class="px-5 nav-container w-full">
        <NavigationBar />
    </div>
    <div class="Navbar">
        <CTA/>

    </div>
    <div class="px-5 sm:px-5 md:px-24 lg:px-32 xl:px-48 py-5">
        <div class="query-conainter bg-gray-700 rounded-lg px-5 xl:px-[5em] py-16">
            <QueryBox></QueryBox>
            <div>
                <!-- {data.post['title']} -->
            </div>
        </div>

    </div>
    <div class="">
    </div>


</div>



<style>
    @import '../custom_reset.css';

    .nav-container {
        margin-bottom: 2em;
        
    }
    /* html {
    }

    .no-resize {
        resize: none;
    } */
    






    /* .main-div {
        dark
    } */
</style>