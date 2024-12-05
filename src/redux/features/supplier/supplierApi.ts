import { apiSlice } from "../api/apiSlice";

export const supplierApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    newSupplier:builder.mutation({
      query:(data)=>({
        url:"/suppliers/create",
        method:"POST",
        body:data
      }),
      invalidatesTags:["Suppliers"]
    }),
    suppliers:builder.query({
      query:(path)=>({
        url:`/suppliers/list/${path.pageNo}/${path.perPage}/${path.SearchArray || 0}`,
        method:"GET"
      }),
      providesTags:["Suppliers"],
      keepUnusedDataFor: 60,
    })
  })
})
export const {useNewSupplierMutation, useSuppliersQuery} = supplierApi