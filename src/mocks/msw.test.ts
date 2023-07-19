import axios from 'axios';
import { describe, expect, expectTypeOf, it } from 'vitest';

describe('MSW Fetch Test: ', () => {
  // it('login', async () => {
  //   const result = {
  //     'X-AUTH-TOKEN':
  //       'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3YnMwOTZAZGF1bS5uZXRfMjgyMTI2NzgwMSIsImlzcyI6Ii7sgq3soJwuIzI4MjEyNjc4MDEiLCJqdGkiOiIxNiIsImlhdCI6MTY4NzI2MDY1MiwiZXhwIjoxNjg3MzQ3MDUyfQ.m8O-2imqlYu6UJ-lny4MdncvLka8R5r0U2soq23G3qo'
  //   };
  //   const {
  //     data: { data }
  //   } = await axios({
  //     method: 'post',
  //     url: '/api/user/login',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: {
  //       email: 'test@test',
  //       password: '12345678'
  //     }
  //   });

  //   expectTypeOf(data.token).toBeObject();
  //   expect(data['X-AUTH-TOKEN']).toBe(result['X-AUTH-TOKEN']);
  // });

  // it('registered list', async () => {
  //   const result = [
  //     {
  //       id: 7,
  //       userId: 3,
  //       accommodationId: 1,
  //       bookName: '홍길동',
  //       accommodationName: 'ACB 호텔',
  //       picUrl:
  //         'https://image.goodchoice.kr/resize_1000X500x0/affiliate/2020/03/24/5e799e9748723.jpg',
  //       checkInDate: '2023-06-13',
  //       checkOutDate: '2023-06-15',
  //       price: 180000,
  //       rate: 8.7,
  //       reviewRegistered: true
  //     },
  //     {
  //       id: 5,
  //       userId: 3,
  //       accommodationId: 1,
  //       bookName: '홍길동',
  //       accommodationName: 'ABC 호텔',
  //       picUrl:
  //         'https://image.goodchoice.kr/resize_1000X500x0/affiliate/2020/03/24/5e799e9748723.jpg',
  //       checkInDate: '2023-06-01',
  //       checkOutDate: '2023-06-02',
  //       price: 100000,
  //       rate: 8.6,
  //       reviewRegistered: false
  //     },
  //     {
  //       id: 3,
  //       userId: 3,
  //       accommodationId: 1,
  //       bookName: '홍길동',
  //       accommodationName: 'BAC 호텔',
  //       picUrl:
  //         'https://image.goodchoice.kr/resize_1000X500x0/affiliate/2020/03/24/5e799e9748723.jpg',
  //       checkInDate: '2023-07-01',
  //       checkOutDate: '2023-07-04',
  //       price: 20000,
  //       rate: 9.3,
  //       reviewRegistered: false
  //     }
  //   ];

  //   const {
  //     data: { data }
  //   } = await axios('/api/user/1/mybook');

  //   expectTypeOf(data).toBeArray();
  //   for (let i = 0; i < result.length; i++) {
  //     expect(data[i]).toEqual(result[i]);
  //   }
  // });

  // 숙소 상세
  it('accommodation detail', async () => {
    const {
      data: { data }
    } = await axios('/api/accommodation/1');

    expectTypeOf(data).toBeArray();
    expectTypeOf(data[1]).toBeObject();
  });

  // 리뷰
  it('review list', async () => {
    const response = await axios.get(
      '/api/accommodation/1/review?page=1&pagesize=3'
    );
    const { data } = response.data;

    expect(data.content).to.be.an('array');
    expect(data.content).length(20);
    expect(data.totalPages).to.deep.equal(7);
  });
});
