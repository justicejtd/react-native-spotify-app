import {ResponsePromise} from 'ky';
import {apiClient} from '../../base';
import PlayerService from './PlayerService';

const PLAYER_URL = 'me/player';
const PAUSE_URL = `${PLAYER_URL}/pause`;
const PLAY_URL = `${PLAYER_URL}/play`;
const NEXT_URL = `${PLAYER_URL}/next`;
const PREVIOUS_URL = `${PLAYER_URL}/previous`;

class PlayerServiceImpl implements PlayerService {
  getPlaybackState(): ResponsePromise {
    return apiClient.get(PLAYER_URL);
  }

  pausePlayback(): ResponsePromise {
    return apiClient.put(PAUSE_URL);
  }

  resumePlayback(): ResponsePromise {
    return apiClient.put(PLAY_URL);
  }

  nextPlayback(): ResponsePromise {
    return apiClient.post(NEXT_URL);
  }
  previousPlayback(): ResponsePromise {
    return apiClient.post(PREVIOUS_URL);
  }
}

export default PlayerServiceImpl;
