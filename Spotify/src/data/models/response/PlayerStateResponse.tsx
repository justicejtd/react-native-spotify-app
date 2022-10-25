import Device from '../device/device';
import {ExternalUrl} from '../external/ExternalUrl';
import Track from '../track/Track';

export interface Context {
  type: string;
  href: string;
  externalUrl: ExternalUrl;
  uri: string;
}

export interface Restrictions {
  reason: string;
}

export interface PlayerStateItem extends Track {
  is_playable: boolean;
  linked_from: PlayerStateItem;
  restrictions: Restrictions;
}

export interface Action {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: true;
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
}

interface PlayerStateResponse {
  device: Device;
  repeat_state: string;
  shuffle_state: string;
  context: Context;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: PlayerStateItem;
  currently_playing_type: string;
  actions: Action[];
}

export default PlayerStateResponse;
