import { useRecoilState } from 'recoil';
import { selectedRoom } from '../../../store/atom/comparisonAtom';
import { addCommasToPrice } from '../../../helpers';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AlertModal } from '../../common/AlertModal';
import { ComparisonModal } from './ComparisonModal';

export const RoomComparisonBox = ({ display }: { display: boolean }) => {
  const [selectedRooms, setSelectedRooms] = useRecoilState(selectedRoom);
  const [alertModalState, setAlertModalState] = useState(false);
  const [comparisonModalState, setComparisonModalState] = useState(false);

  const navigate = useNavigate();
  const urlParams = new URLSearchParams(
    '?' + window.location.hash.split('?')[1]
  );
  const {
    checkindate: checkInDate,
    checkoutdate: checkOutDate,
    people: people
  } = Object.fromEntries(urlParams.entries());

  const convertDateFormat = (date: string) => {
    const [, month, day] = date.split('-');
    return `${month}/${day}`;
  };

  const handleComparison = () => {
    if (selectedRooms.length < 2) setAlertModalState(true);
    else setComparisonModalState(true);
  };

  const deleteSelectedAcc = (idx: number) => {
    const newItems = selectedRooms.filter((_, i) => i !== idx);
    setSelectedRooms(newItems);
  };

  return (
    <article
      className={`flex flex-col justify-between chat chat-end absolute bottom-16 md:bottom-28 right-16 md:right-20 w-80 h-fit ${
        display ? 'block' : 'hidden'
      }`}
    >
      <div className="chat-bubble chat-bubble-warning flex flex-col justify-between w-full h-fit">
        {selectedRooms.length === 0 && (
          <div className="flex items-center justify-center w-full h-20 mb-2 text-sm bg-white rounded-xl">
            상품을 담아주세요
          </div>
        )}
        {selectedRooms.map((el, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between gap-1 mb-2 h-20 rounded-lg bg-white"
            >
              <figure
                className="w-5/12 object-cover rounded-s-lg cursor-pointer tooltip tooltip-warning tooltip-right"
                data-tip="자세히보기"
                onClick={() =>
                  navigate(
                    `/accommodation/${el.accommodationId}?&checkindate=${checkInDate}&checkoutdate=${checkOutDate}&people=${people}`
                  )
                }
              >
                <img
                  src={el.imgUrl}
                  alt={`${el.roomName} image`}
                  className="rounded-s-lg h-full w-full"
                />
              </figure>
              <div className="w-5/12 text-sm">
                <p className="truncate font-semibold text-base">
                  {el.roomName}
                </p>
                <p>
                  {convertDateFormat(checkInDate)} ~{' '}
                  {convertDateFormat(checkOutDate)}
                </p>
                <p>{addCommasToPrice(el.price)}원</p>
              </div>
              <button
                onClick={() => deleteSelectedAcc(idx)}
                className="badge badge-neutral badge-sm mt-1 mr-1 w-3 text-white"
              >
                ✕
              </button>
            </div>
          );
        })}
        <div onClick={handleComparison} className="flex justify-end items-end">
          <button className="btn btn-sm bg-white  border-none text-sm font-normal">
            비교하기
          </button>
        </div>
      </div>
      <ComparisonModal
        source="room"
        modalState={comparisonModalState}
        handleModal={setComparisonModalState}
      />
      <AlertModal
        content="최소 2개의 상품을 담아주세요!"
        modalState={alertModalState}
        handleModal={setAlertModalState}
      />
    </article>
  );
};