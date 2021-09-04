// import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

// export const octoMixin = {
//     methods: {
//         createOctokitClient() {
//             return new Octokit({
//                 auth: localStorage.getItem("github-token"),
//             });
//         }
//     }
// }
export const octokitMixin = {
    methods: {
      createOctokitClient() {
        return new window.Octokit({
          auth: localStorage.getItem("github-token"),
        });
      }
    }
  }

//this is a mixin, which is an object that we merge into components to be used there
// the methods property is added so we can create methods in our components