import GreetingManager from '../../../../utils/greetingManager/GreetingManager';

const useGetGreetingMessage = () => {
  const getGreetingByCurrentTime = () => {
    return GreetingManager.getGreetingByCurrentTime();
  };

  return {getGreetingByCurrentTime};
};

export default useGetGreetingMessage;
