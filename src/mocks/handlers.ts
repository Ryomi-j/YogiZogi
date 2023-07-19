import { rest } from 'msw';
import { accommodationData } from './api/data/accommodationData';
import { accommodationDetailData } from './api/data/accommodationDetailData';
import { reviewData } from './api/data/reviewData';
import { accommodationComparisonData } from './api/data/accommodationComparison';
import { roomComparisonData } from './api/data/roomComparison';

export const handlers = [
  // 숙소 검색
  rest.get('/api/accommodation/search', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword') || '';
    const sort = req.url.searchParams.get('sort');
    const direction = req.url.searchParams.get('direction');
    const minprice = req.url.searchParams.get('minprice');
    const maxprice = req.url.searchParams.get('maxprice');
    const category = req.url.searchParams.get('category');
    const lat = req.url.searchParams.get('lat');
    const lon = req.url.searchParams.get('lon');

    const calcDistance = (latD: number, lonD: number) => {
      return Math.sqrt(
        Math.pow(Number(lat) - latD, 2) + Math.pow(Number(lon) - lonD, 2)
      );
    };

    const filteredData = accommodationData;

    return res(
      ctx.status(200),
      ctx.json({
        code: 'RESPONSE_SUCCESS',
        status: 'OK',
        msg: 'SUCCESS',
        data: {
          msg: '성공적으로 작업을 수행 했습니다.',
          content: filteredData,
          totalElements: filteredData.length,
        },
        pageable: {
          sort: {
            empty: false,
            sorted: true,
            unsorted: false
          },
          offset: 0,
          paged: true,
          unpaged: false
        },
        last: true,
        number: 0,
        sort: {
          empty: false,
          sorted: true,
          unsorted: false
        },
        first: true,
        empty: false
      })
    );
  }),

  // 숙소 리뷰 목록 확인
  rest.get('/api/accommodation/:accommodationId/review', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const pageSize = parseInt(req.url.searchParams.get('pagesize') || '0');

    return res(
      ctx.status(200),
      ctx.json({
        code: 'RESPONSE_SUCCESS',
        status: 'OK',
        msg: '성공적으로 작업을 수행 했습니다.',
        data: {
          content: reviewData,
          totalElements: reviewData.length,
          totalPages: Math.ceil(reviewData.length / pageSize)
        },
        pageable: {
          sort: {
            empty: false,
            sorted: true,
            unsorted: false
          },
          offset: 0,
          pageNumber: page,
          pageSize: pageSize,
          paged: true,
          unpaged: false
        },
        last: true,
        size: pageSize,
        number: 0,
        sort: {
          empty: false,
          sorted: true,
          unsorted: false
        },
        first: true,
        empty: false
      })
    );
  }),

  // 숙소 상세
  rest.get('/api/accommodation/:accommodationId', (req, res, ctx) => {
    const { accommodationId } = req.params;

    const checkindate = req.url.searchParams.get('checkindate');
    const checkoutdate = req.url.searchParams.get('checkoutdate');
    const people = req.url.searchParams.get('people');
    const data = accommodationDetailData.find(
      (data) => data.id == Number(accommodationId)
    );

    if (!data) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 'ACCOMMODATION_NOT_FOUND',
          status: 'BAD_REQUEST',
          msg: '존재하지 않는 숙소입니다.',
          data: null
        })
      );
    }

    const {
      id,
      accommodationName,
      category,
      rate,
      address,
      region,
      lat,
      lon,
      info,
      picUrlList,
      rooms
    } = data;

    return res(
      ctx.status(200),
      ctx.json({
        code: 'RESPONSE_SUCCESS',
        status: 'OK',
        msg: 'SUCCESS',
        data: {
          id,
          accommodationName,
          category,
          rate,
          address,
          region,
          lat,
          lon,
          info,
          picUrlList,
          rooms
        }
      })
    );
  }),

  // 숙소 비교
  rest.get('/api/accommodation/compare/accommodation', (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search);
    const accommodationId = searchParams.get('accommodationid');

    const data = accommodationComparisonData.find(
      (data) => data.id === Number(accommodationId)
    );

    if (!data) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 'ACCOMMODATION_NOT_FOUND',
          status: 'BAD_REQUEST',
          msg: '존재하지 않는 숙소입니다.',
          data: null
        })
      );
    }

    const { id, accommodationName, rate, address, convenience, picUrl, price } =
      data;

    return res(
      ctx.status(200),
      ctx.json({
        code: 'RESPONSE_SUCCESS',
        status: 'OK',
        msg: 'SUCCESS',
        data: {
          id,
          accommodationName,
          rate,
          address,
          convenience,
          picUrl,
          price
        }
      })
    );
  }),

  // 방 비교
  rest.get('/api/accommodation/compare/room', (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search);
    const roomId = searchParams.get('roomid');

    const data = roomComparisonData.find((data) => data.id === Number(roomId));

    if (!data) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 'ROOM_NOT_FOUND',
          status: 'BAD_REQUEST',
          msg: '존재하지 않는 방입니다.',
          data: null
        })
      );
    }
    const {
      id,
      accommodationName,
      roomName,
      picUrl,
      address,
      rate,
      price,
      convenience
    } = data;

    return res(
      ctx.status(200),
      ctx.json({
        code: 'RESPONSE_SUCCESS',
        status: 'OK',
        msg: 'SUCCESS',
        data: {
          id,
          accommodationName,
          roomName,
          picUrl,
          address,
          rate,
          price,
          convenience
        }
      })
    );
  })
];
