import React, {RefObject} from 'react';
// import { common } from '@fe-eventme/eventme-mobile/constants/TestIds/common';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {TouchableOpacity} from 'react-native';
import {Portal} from 'react-native-paper';
import CrossIcon from './assets/CrossIcon';
import EMBottomSheetProps from './BottomSheetType';
import useStyle from './styles';

const EMBottomSheet = React.forwardRef<
  BottomSheetModalMethods,
  Partial<EMBottomSheetProps>
>((props, ref) => {
  const {children, onDismiss, ...remainingProps} = props;
  const styles = useStyle();
  const onClosePressed = () => {
    (ref as unknown as RefObject<BottomSheetModalMethods>)?.current?.dismiss();
    onDismiss && onDismiss();
  };
  // https://github.com/microsoft/TypeScript/issues/38535
  return (
    <Portal>
      <BottomSheetModalProvider>
        <BottomSheetModal
          enableDismissOnClose
          detached={true}
          onDismiss={onDismiss}
          index={0 || remainingProps.index}
          snapPoints={['80%']}
          handleIndicatorStyle={styles.handleIndicatorColor}
          backgroundStyle={styles.backgroundColor}
          containerStyle={styles.containerBg}
          {...remainingProps}
          ref={ref}
          handleComponent={() => (
            <TouchableOpacity
              onPress={onClosePressed}
              style={styles.touchOpacityStyle}
              // testID={common.bottom_sheet_close}
            >
              <CrossIcon />
            </TouchableOpacity>
          )}>
          {children}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  );
});
export default EMBottomSheet;
