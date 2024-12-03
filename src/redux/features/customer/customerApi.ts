import { apiSlice } from "../api/apiSlice";

export const  customerApi = apiSlice.injectEndpoints({
  endpoints:(builder) =>({
    newCustomer:builder.mutation({
      query:(data)=>({
        url:"/customers/create",
        method:"POST",
        body:data
      })
    })
  })
})
export const {useNewCustomerMutation} = customerApi