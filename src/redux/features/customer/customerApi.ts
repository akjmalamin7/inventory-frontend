import { apiSlice } from "../api/apiSlice";

export const  customerApi = apiSlice.injectEndpoints({
  endpoints:(builder) =>({
    newCustomer:builder.mutation({
      query:(data)=>({
        url:"/customers/create",
        method:"POST",
        body:data
      }),
      invalidatesTags:["Customers"]
    }),
    customers:builder.query({
      query:(path)=>({
        url:`/customers/list/${path.pageNo}/${path.perPage}/${path.SearchArray || 0}`,
        method:"GET"
      }),
      providesTags:["Customers"],
      keepUnusedDataFor: 60,
    })
  })
})
export const {useNewCustomerMutation,useCustomersQuery} = customerApi