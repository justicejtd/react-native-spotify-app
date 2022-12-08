import SliceState from '../../redux/models/slice/SliceState';
interface CycleStateManager {
  handleStateFulfilled(state: SliceState): void;
  handleStatePending(state: SliceState): void;
  handleStateRejected(state: SliceState): void;
}

// Refactor to Namespace
class CycleStateManagerImpl implements CycleStateManager {
  handleStateFulfilled(state: SliceState): void {
    this.setCycleState(state, false, false);
  }
  handleStatePending(state: SliceState): void {
    this.setCycleState(state, true, false);
  }
  handleStateRejected(state: SliceState): void {
    this.setCycleState(state, false, true);
  }

  setCycleState(
    state: SliceState,
    isLoading: boolean,
    hasError: boolean,
  ): void {
    state.isLoading = isLoading;
    state.hasError = hasError;
  }
}

const cycleStateManager: CycleStateManager = new CycleStateManagerImpl();

export default cycleStateManager;
