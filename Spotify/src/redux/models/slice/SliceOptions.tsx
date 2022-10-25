import {CreateSliceOptions, SliceCaseReducers} from '@reduxjs/toolkit';

type SliceOptions = CreateSliceOptions<any, SliceCaseReducers<any>>;
export default SliceOptions;
