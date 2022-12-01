import {BottomSheetModalProps, BottomSheetModal} from '@gorhom/bottom-sheet';

export default interface EMBottomSheetProps extends BottomSheetModalProps {
  ref: BottomSheetModal;
  visible: boolean; // Required for test mocks to work properly
}
