// export const CONTRACT_VIEW = {
//     list: (page: number) => ['contractList', { page }] as const,
//     detailed: (id: number | null) => ['contract', { id }] as const,
//   };

export const ROOM = {
  all: ['rooms_all'] as const,
  map: ['rooms_map'] as const,
  detail: (roomId: number | string) => ['room_detail', roomId] as const,
  comments: (roomId: number | string) => ['room_comments', roomId] as const,
  comments_infinite: (roomId: number | string) =>
    ['room_comments_infinite', roomId] as const,
  user_likes: (userId: string) => ['room_user_likes', userId] as const,
  user_comments: (userId: string) => ['room_user_comments', userId] as const,
}
