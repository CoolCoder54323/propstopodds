<script>
    import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
    import { HomeOutline, EnvelopeOutline, BellOutline } from 'flowbite-svelte-icons';
    const onClick = ()=>{
      window.document.body.classList.toggle('dark-mode')
      console.log('done',window.document.body.classList.contains('dark-mode'))
    }
    let sm = 640 
    export let bgColor = 'dark:bg-gray-900'
    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0
    let iconSize = 6;
  </script>
  <svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

    
    {#if innerWidth > 640}
    <Toolbar class="pt-2 pb-2 pr-5 pl-8 border-1 {bgColor}" color="green" embedded={false}>
    <ToolbarGroup >
      <ToolbarButton><HomeOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
    </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarButton on:click={onClick}><BellOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
        <ToolbarButton class=""><EnvelopeOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarButton class="w-{iconSize+2} h-{iconSize+2} pr-0 pt-0 pb-0 pl-0" slot="end" color="green"><img class="" alt="logo" src="./prop_stop_logo_.png"/></ToolbarButton>
    </Toolbar>

    {:else}
      <Toolbar class="pt-2 pb-2 pr-5 pl-8 border-1 {bgColor}" color="green" embedded={false}>
        <!-- <div class="w-full"> -->
          <div class=" w1/4">
            <ToolbarButton><HomeOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
          </div>
          <div>
            <ToolbarButton on:click={onClick}><BellOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
          </div>
          <div>
            <ToolbarButton class=""><EnvelopeOutline class="w-{iconSize} h-{iconSize}" /></ToolbarButton>
          </div>
          <div>
            <ToolbarButton class="w-{iconSize+2} h-{iconSize+2} pr-0 pt-0 pb-0 pl-0" color="green"><img class="" alt="logo" src="./prop_stop_logo_.png"/></ToolbarButton>
          </div>
        <!-- </div> -->
      </Toolbar>

      {/if}

  


  <style>

  </style>