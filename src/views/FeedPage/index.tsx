import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedsData } from '../../store/FeedPage/actionCreator';
import { FeedData } from '../../utils/types';

function FeedPage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.feedPage)
  console.log(state.data);

  useEffect(() => {
    dispatch(getFeedsData())
  }, [])
  return (
    <div>
      homepage
    </div>
  );
}

type RootState = {
  feedPage: {
    isLoading: boolean;
    hasError: boolean;
    data: FeedData[];
  }
}

export default FeedPage;