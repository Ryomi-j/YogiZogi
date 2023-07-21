import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAccommodation, selectedRoom } from '../store/atom/comparisonAtom';
import { getDateFormat } from '../utils/handleDate';

export const useSaveComparisonData = () => {
  const [selectedRooms, setSelectedRooms] = useRecoilState(selectedRoom);
  const [selectedAcc, setSelectedAcc] = useRecoilState(selectedAccommodation);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const today = getDateFormat(new Date());
      const lastTimeStamp = localStorage.getItem('lastTimeStamp');

      if (lastTimeStamp && lastTimeStamp !== today) localStorage.clear();
      else {
        localStorage.setItem(
          'lastTimeStamp',
          JSON.stringify(getDateFormat(new Date()))
        );
        localStorage.setItem('selectedRoom', JSON.stringify(selectedRooms));
        localStorage.setItem(
          'selectedAccommodation',
          JSON.stringify(selectedAcc)
        );
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [selectedRooms, selectedAcc]);
};
