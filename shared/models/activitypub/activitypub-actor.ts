// Copyright © 2021 Andrei Jiroh Halili and contributors. Licensed under AGPLv3 or later.
// Portions of code is borrowed from PeerTube's source code which can be available at
// https://github.com/Chocobozzz/PeerTube, which licensed under AGPLv3, among others which
// can be found in the CREDITS.md file at root directory of this source tree.
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ActivityIconObject, ActivityPubAttributedTo } from './objects/common'

export type ActivityPubActorType = 'Person' | 'Application' | 'Group' | 'Service' | 'Organization'

export interface ActivityPubActor {
  '@context': any[]
  type: ActivityPubActorType
  id: string
  following: string
  followers: string
  playlists?: string
  inbox: string
  outbox: string
  preferredUsername: string
  url: string
  name: string
  endpoints: {
    sharedInbox: string
  }
  summary: string
  attributedTo: ActivityPubAttributedTo[]

  support?: string
  publicKey: {
    id: string
    owner: string
    publicKeyPem: string
  }

  icon?: ActivityIconObject
  image?: ActivityIconObject

  published?: string
}
