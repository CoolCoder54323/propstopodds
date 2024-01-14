
<form on:submit={handleSubmit}>   
    <!-- <form method="POST">    -->
    <!-- <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">de</label> -->
    <div class="relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input bind:value={value} on:input={filterInput} onsubmit={(event)=>{console.log("fuck me");event.preventDefault()}} name="query" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" placeholder="Search Bets, Stats..." required>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-blue-800">↑</button>
    </div>
    
</form>
{#if (data)}

    {#await data}
    <div class="w-full flex justify-center mt-3">
        <Spinner color='green'/>
    </div>
    {:then _}
    <div class=" border-4 resize-none border-green-400 mt-3 rounded-lg">
        <Table color='custom' class='relative overflow-x-auto bg-gray-950 rounded-lg'>
            <TableHead>
                {#each tableKeys as key}
                    <TableHeadCell class=" text-gray-300 text-lg">{key}</TableHeadCell>
                {/each}
            </TableHead>
            <TableBody>
                {#each myarr as _, i}
                    <TableBodyRow>
                        {#each Object.values(gameLogs[i]) as value}
                            <TableBodyCell>{value}</TableBodyCell>
                        {/each}
                    </TableBodyRow>
                    
                {/each}
            </TableBody>
        </Table>

    </div>

    {/await}

  {:else}
  <Table>
    <TableHead>

    </TableHead>
    <TableBody>
    </TableBody>
</Table>{/if}




<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Spinner } from 'flowbite-svelte';
    import { onMount } from 'svelte';   
    let url = ''
    console.log('dwed')
    // onMount(() => {url = window.location.href
    //                 console.log('mounted')});

    $: value = ''
    
    $: data = null
    $: gameLogs = []
    $: tableKeys = [];
    $: myarr = [];
    // function recurringPrint() {
    // console.log(gameLogs);
    // setTimeout(recurringPrint, 2000); // Call itself after a 2-second delay
    // }
    // recurringPrint()

    async function handleSubmit(event) {
        event.preventDefault()
        url = window.location.href
        console.log(url)
        const urlString = new URL(url);
        let queryValue = urlString.searchParams.get("query");
        queryValue = value
        data = fetchData(queryValue)
        data.then((value)=>{
            console.log('pooop')
            gameLogs = value
            gameLogs = JSON.parse(gameLogs)
            tableKeys = Object.keys(gameLogs[0])
            myarr = new Array(gameLogs.length).fill(0);
        })


        

        
    }
    async function isFinished(promise) {
        return await Promise.race([delay(0, false), promise.then(() => true, () => true)]);
    }

    async function fetchData(query) {
        // Define the URL of the API you want to fetch data from
        const apiUrl = `http://192.168.5.75:5000/${query}`;

        try {
            // Make an HTTP GET request to the API using fetch() and await the response
            const response = await fetch(apiUrl);

            // Check if the response status is OK (200)
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response as JSON and await it
            const data = await response.json();

            // Handle the JSON data returned from the API
            console.log(data);
            return data
        } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error("Fetch error:", error);
        }
        }


    let value = ''
    // @ts-ignore
    function filterInput(event) {
        const regex = /^[a-zA-Z0-9 ]*$/; // Regex to allow only alphanumeric characters
        if (!regex.test(event.target.value)) {
            value = value.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
        } else {
            value = event.target.value;
        }
    }

    // export const actions = {
	// // @ts-ignore
	// create: async ({ cookies, request }) => {
	// 	const data = await request.formData();
	// 	// @ts-ignore
	// 	db.createTodo(cookies.get('userid'), data.get('description'));
	// },

	// // @ts-ignore
	// delete: async ({ cookies, request }) => {
	// 	const data = await request.formData();
	// 	// @ts-ignore
	// 	db.deleteTodo(cookies.get('userid'), data.get('id'));
	// }
// };
</script>

