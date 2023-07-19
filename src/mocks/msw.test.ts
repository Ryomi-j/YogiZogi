import axios from 'axios';
import { describe, expect, expectTypeOf, it } from 'vitest';

describe('MSW Fetch Test: ', () => {
  // 검색 결과
  it('search result', async () => {
    const {
      data: { data }
    } = await axios('/api/accommodation/search');

    expectTypeOf(data).toBeArray();
    expectTypeOf(data[1]).toBeObject();
  });

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

  // 숙소 비교
  it('accommodation comparison', async () => {
    const response = await axios.get(
      '/api/accommodation/compare/accommodation?accommodationid=1'
    );
    const { data } = response.data;
    expect(data).to.be.an('object');
    expect(data.id).toEqual(1);
  });

  // 객실 비교
  it('room comparison', async () => {
    const response = await axios.get(
      '/api/accommodation/compare/room?roomid=1'
    );
    const { data } = response.data;
    expect(data).to.be.an('object');
    expect(data.id).toEqual(1);
  });
});
