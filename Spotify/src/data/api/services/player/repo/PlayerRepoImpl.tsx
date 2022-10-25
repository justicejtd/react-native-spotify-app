import {ResponsePromise} from 'ky';
import PlayerService from '../PlayerService';
import PlayerServiceImpl from '../PlayerServiceImpl';
import PlayerRepo from './PlayerRepo';

class PlayerRepoImpl implements PlayerRepo {
  private playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  getPlaybackState(): ResponsePromise {
    return this.playerService.getPlaybackState();
  }

  pausePlayback(): ResponsePromise {
    return this.playerService.pausePlayback();
  }

  resumePlayback(): ResponsePromise {
    return this.playerService.resumePlayback();
  }

  nextPlayback(): ResponsePromise {
    return this.playerService.nextPlayback();
  }
  previousPlayback(): ResponsePromise {
    return this.playerService.previousPlayback();
  }
}

export const playerRepo = new PlayerRepoImpl(new PlayerServiceImpl());
