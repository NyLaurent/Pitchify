import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import { cookies } from 'next/headers'

const View = async ({id}: {id: string}) => {
    // Get the current views
    const {views: totalViews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id})
    
    // Get cookies instance
    const cookieStore = await cookies()
    const viewCookie = cookieStore.get(`view-${id}`)
    
    if (!viewCookie) {
        try {
            await writeClient
                .patch(id)
                .set({views: totalViews + 1})
                .commit()
                
            // Set cookie with the resolved cookieStore
            cookieStore.set(`view-${id}`, 'true', {
                httpOnly: true,
                maxAge: 60 * 60 * 24 // 24 hours
            })
        } catch (error) {
            console.error('Error updating view count:', error)
        }
    }

    return (
        <div className='view-container'>
            <div className='absolute -top-2 -right-2'>
                <Ping/>
            </div>
            <p className='view-text'>
                <span className='font-black'>Views: {totalViews}</span>
            </p>
        </div>
    )
}

export default View