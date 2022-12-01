import React, {FC} from 'react';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import {IEMSkeletonProps} from './SkeletonType';

const EMSkeleton: FC<IEMSkeletonProps> = ({...remainingProps}) => {
  return (
    <Skeleton
      animationType="shiver"
      animationDirection="horizontalRight"
      {...remainingProps}
    />
  );
};

export default EMSkeleton;
