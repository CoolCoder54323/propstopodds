<script>
    import { Heading, P, Button, Img } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    let slogan = "smart basketball assistant"


    let imageWidth = 64
    $: imageHeight = Math.round(imageWidth *  1.15625)

    
  </script>
  
  <div class="text-center flex flex-col items-center max-w-">
    <div class="flex items-center flex-col sm:flex-row gap-4 mb-5">
      <Img imgClass="" size="h-52" src="/propStopTempLogo(1)(2).png" sicaption=""/>
      <Heading tag="h1" class="mb-4" customSize="text-3xl sm:text-4xl font-extrabold  md:text-5xl lg:text-6xl">Prop Stop</Heading>

    </div>
    <P class="mb-6 text-lg  lg:text-2xl sm:px-16 xl:px-64 dark:text-gray-400 text-center">{slogan}</P>
    <Button class="w-40 sm:w-1/4" href="/">
      Learn more
      <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
    </Button>

  </div>

  <style>

  </style>