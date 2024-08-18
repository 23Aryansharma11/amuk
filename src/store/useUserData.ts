import { useMemo } from 'react';
import { User } from './@types.store';
import { formatNumber, formatDate } from '@/lib/utils';

export const useUserData = (user: User | null) => {
    const formattedPosts = useMemo(() => {
        return user ? formatNumber(user.noOfPosts) : '0';
    }, [user])

    const formattedFeedbacks = useMemo(() => {
        return user ? formatNumber(user.noOfFeedback) : '0';
    }, [user])

    const formattedDate = useMemo(() => {
        return user ? formatDate(user.joinedOn) : '';
    }, [user])

    return {
        formattedPosts,
        formattedFeedbacks,
        formattedDate,
    }
}