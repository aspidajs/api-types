import { MockMethods } from 'axios-mock-server'

export interface Methods {
  get: {
    params: {
      id: string
      count?: number
      max_position?: number
      min_position?: number
    }

    response: {
      objects: {
        timelines: {
          [key: string]: {
            collection_type: string
            collection_url: string
            description: string
            name: string
            timeline_order: string
            url: string
            user_id: string
            visibility: 'public' | 'private'
          }
        }
      }
    }
  }
}

export default {
  get: ({ params }) => [
    200,
    {
      objects: {
        timelines: {
          [params.id]: {
            collection_type: 'user',
            collection_url: `https://twitter.com/TwitterDev/timelines/${params.id.replace(
              'custom-',
              ''
            )}`,
            description: 'A collection of Tweets about National Parks in the United States.',
            name: 'National Park Tweets',
            timeline_order: 'curation_reverse_chron',
            url: '',
            user_id: '2244994945',
            visibility: 'public'
          }
        },
        tweets: {
          '504032379045179393': {
            contributors: null,
            coordinates: null,
            created_at: 'Mon Aug 25 22:27:38 +0000 2014',
            entities: {
              hashtags: [],
              media: [
                {
                  display_url: 'pic.twitter.com/HtdvV0bPEu',
                  expanded_url: 'http://twitter.com/Interior/status/504032379045179393/photo/1',
                  id: 504032378411446273,
                  id_str: '504032378411446273',
                  indices: [99, 121],
                  media_url: 'http://pbs.twimg.com/media/Bv6uxxaCcAEjWHD.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/Bv6uxxaCcAEjWHD.jpg',
                  sizes: {
                    large: {
                      h: 695,
                      resize: 'fit',
                      w: 1024
                    },
                    medium: {
                      h: 407,
                      resize: 'fit',
                      w: 600
                    },
                    small: {
                      h: 230,
                      resize: 'fit',
                      w: 340
                    },
                    thumb: {
                      h: 150,
                      resize: 'crop',
                      w: 150
                    }
                  },
                  type: 'photo',
                  url: 'http://t.co/HtdvV0bPEu'
                }
              ],
              symbols: [],
              urls: [],
              user_mentions: [
                {
                  id: 66453289,
                  id_str: '66453289',
                  indices: [47, 60],
                  name: 'Lake Clark NP&P',
                  screen_name: 'LakeClarkNPS'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  display_url: 'pic.twitter.com/HtdvV0bPEu',
                  expanded_url: 'http://twitter.com/Interior/status/504032379045179393/photo/1',
                  id: 504032378411446273,
                  id_str: '504032378411446273',
                  indices: [99, 121],
                  media_url: 'http://pbs.twimg.com/media/Bv6uxxaCcAEjWHD.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/Bv6uxxaCcAEjWHD.jpg',
                  sizes: {
                    large: {
                      h: 695,
                      resize: 'fit',
                      w: 1024
                    },
                    medium: {
                      h: 407,
                      resize: 'fit',
                      w: 600
                    },
                    small: {
                      h: 230,
                      resize: 'fit',
                      w: 340
                    },
                    thumb: {
                      h: 150,
                      resize: 'crop',
                      w: 150
                    }
                  },
                  type: 'photo',
                  url: 'http://t.co/HtdvV0bPEu'
                }
              ]
            },
            favorite_count: 639,
            favorited: false,
            geo: null,
            id: 504032379045179393,
            id_str: '504032379045179393',
            in_reply_to_screen_name: null,
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            is_quote_status: false,
            lang: 'en',
            place: null,
            possibly_sensitive: false,
            retweet_count: 606,
            retweeted: false,
            source: 'Twitter for iPhone',
            text:
              'How about a grizzly bear waving for the camera @LakeClarkNPS to end the day? Photo: Kevin Dietrich http://t.co/HtdvV0bPEu',
            truncated: false,
            user: {
              id: 76348185,
              id_str: '76348185'
            }
          }
        }
      },
      response: {
        position: {
          max_position: '371578415352947200',
          min_position: '371578380871797248',
          was_truncated: false
        },
        timeline: [
          {
            feature_context: 'HBgGY3VzdG9tFoCAktzo1NL8DgAA',
            tweet: {
              id: '504032379045179393',
              sort_index: '371578415352947200'
            }
          },
          {
            feature_context: 'HBgGY3VzdG9tFoCAktzo1NL8DgAA',
            tweet: {
              id: '532654992071852032',
              sort_index: '371578393139797760'
            }
          },
          {
            feature_context: 'HBgGY3VzdG9tFoCAktzo1NL8DgAA',
            tweet: {
              id: '524573263163572224',
              sort_index: '371578380871797248'
            }
          }
        ],
        timeline_id: params.id
      }
    }
  ]
} as MockMethods
