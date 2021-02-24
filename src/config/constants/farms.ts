import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'CANDY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x426FD588a1cBe3EfF1f6BbEf30D0D5B727ab0cCb',
    },
    tokenSymbol: 'CANDY',
    tokenAddresses: {
      97: '',
      56: '0x426FD588a1cBe3EfF1f6BbEf30D0D5B727ab0cCb',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'WOOPER-CANDY LP',
    lpAddresses: {
      97: '',
      56: '0x426FD588a1cBe3EfF1f6BbEf30D0D5B727ab0cCb',
    },
    tokenSymbol: 'WOOPER',
    tokenAddresses: {
      97: '',
      56: '0xb238c3e6cadc7d6f25cbcbf926a644db7d661bf2',
    },
    quoteTokenSymbol: QuoteToken.CANDY,
    quoteTokenAdresses: contracts.candy,
    isCommunity: true,
  },
  {
    pid: 3,
    lpSymbol: 'WOOPER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x426FD588a1cBe3EfF1f6BbEf30D0D5B727ab0cCb',
    },
    tokenSymbol: 'WOOPER',
    tokenAddresses: {
      97: '',
      56: '0xb238c3e6cadc7d6f25cbcbf926a644db7d661bf2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x426FD588a1cBe3EfF1f6BbEf30D0D5B727ab0cCb',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
