import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'
import { toast } from "react-toastify";
import axios from "axios";
import { url,setHeaders } from "./api";

export const createSummary = createAsyncThunk(
  "summary/createSummar",
  async (values) => {
    try {
      const response = await api.createsummary(values)

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
// export const getProjects = createAsyncThunk(
//   "project/getProject",
//   async (_, {rejectWithValue}) => {
//     try {
//       const response = await api.getprojects()
//         return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data);
//     }
//   }
// );
export const getProjectsByUser = createAsyncThunk(
  "tenant/getProjectsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getProjectsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const likeTour = createAsyncThunk(
  "tenant/likeTour",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.likeTour(_id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getTours = createAsyncThunk(
  "tenant/getTours",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getTours(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTour = createAsyncThunk(
  "tenant/getTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getTour(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteSummary = createAsyncThunk(
  "summary/deleteSummary",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteSummary(id);
      toast.success("Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateTour = createAsyncThunk(
  "tenant/updateTour",
  async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateTour(updatedTourData, id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchTours = createAsyncThunk(
  "tenant/searchTours",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getToursBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getToursByTag = createAsyncThunk(
  "tenant/getToursByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await api.getTagTours(tag);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRelatedTours = createAsyncThunk(
  "tenant/getRelatedTours",
  async (tags, { rejectWithValue }) => {
    try {
      const response = await api.getRelatedTours(tags);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

  const summarySlice = createSlice({
    name: "summary",
    initialState: {
      
      error: "",
      loading: false,
      projec:{},
      project:[],
      projects:[],
      
    },
    reducers: {
    //   setUser: (state, action) => {
    //     state.user = action.payload;
    //   },
    //   setLogout: (state, action) => {
    //     localStorage.clear();
    //     state.user = null;
    //   },
    },
    extraReducers: {
      [createSummary.pending]: (state, action) => {
        state.loading = true;
      },
      [createSummary.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [createSummary.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      // [getProjects.pending]: (state, action) => {
      //   state.loading = true;
      // },
      // [getProjects.fulfilled]: (state, action) => {
      //   state.loading = false;
      //   state.project = action.payload;
      // },
      // [getProjects.rejected]: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // },
      [getProjectsByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getProjectsByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [getProjectsByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getTours.pending]: (state, action) => {
        state.loading = true;
      },
      [getTours.fulfilled]: (state, action) => {
        state.loading = false;
        state.tours = action.payload.data;
        
      },
      [getTours.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getTour.pending]: (state, action) => {
        state.loading = true;
      },
      [getTour.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [getTour.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [deleteSummary.pending]: (state, action) => {
        state.loading = true;
      },
      [deleteSummary.fulfilled]: (state, action) => {
        state.loading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.userTours = state.userTours.filter((item) => item._id !== id);
          state.tours = state.tours.filter((item) => item._id !== id);
        }
      },
      [deleteSummary.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [updateTour.pending]: (state, action) => {
        state.loading = true;
      },
      [updateTour.fulfilled]: (state, action) => {
        state.loading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.projects = state.projects.map((item) =>
            item._id === id ? action.payload : item
          );
          state.projects = state.projects.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      },
      [updateTour.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [likeTour.pending]: (state, action) => {},
      [likeTour.fulfilled]: (state, action) => {
        state.loading = false;
        const {
          arg: { _id },
        } = action.meta;
        if (_id) {
          state.tours = state.tours.map((item) =>
            item._id === _id ? action.payload : item
          );
        }
      },
      [likeTour.rejected]: (state, action) => {
        state.error = action.payload.message;
      },
  
      [searchTours.pending]: (state, action) => {
        state.loading = true;
      },
      [searchTours.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [searchTours.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getToursByTag.pending]: (state, action) => {
        state.loading = true;
      },
      [getToursByTag.fulfilled]: (state, action) => {
        state.loading = false;
        state.tagTours = action.payload;
      },
      [getToursByTag.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getRelatedTours.pending]: (state, action) => {
        state.loading = true;
      },
      [getRelatedTours.fulfilled]: (state, action) => {
        state.loading = false;
        state.relatedTours = action.payload;
      },
      [getRelatedTours.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    
    },
  });
  export default summarySlice.reducer;