// Copyright © 2021 Andrei Jiroh Halili and contributors. Licensed under AGPLv3 or later.
// Portions of code is borrowed from PeerTube's source code which can be available at
// https://github.com/Chocobozzz/PeerTube, which licensed under AGPLv3, among others which
// can be found in the CREDITS.md file at root directory of this source tree.
// SPDX-License-Identifier: AGPL-3.0-or-later

export interface ActivityPubSignature {
    type: string
    created: Date
    creator: string
    signatureValue: string
}
