// import { spawn, spawnSync } from 'child_process';
import { page } from '$app/stores';
import { python } from 'pythonia'
// process.env.PYTHON_BIN = '/Users/nicholasdixon/Projects/WebDev/PropStop/PropStop/test.py';


// @ts-ignore
// @ts-ignore

export const load = async ({fetch, url})=>{
  
  console.log("LOOAD")
  // console.log(fetch,url)

  // let sendback = '';
  // const pydata = null
  // // let pydata = await runPythonScript('', ["-m ",`"${url.searchParams.get('query')}"`])
  // if(!pydata){
  //   pydata = "poop"
  // }
	// return {
	// 	post: {
	// 		title: `${pydata}`,
	// 		content: "hello"
	// 	}
	// };
}





// Run a Python script and return output

// async function runPythonScript(scriptPath, args) {

//   const test = await python('./random_choices.py')
//   const color = await test.get_random_word
//   python.exit()

//   data = color
//   return data;
// }
