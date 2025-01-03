---
title: AK DPS Gear Guide
created: 2024-06-15
tags: 
  - PersonalPost
flags: 
  - unlisted
---

# Abridged Version
I have summarized the article on google sheets for those who don't want to read the entirety of Tolstoy in order to know how to make your numbers in AK slightly larger:

[Link to Sheet](https://docs.google.com/spreadsheets/d/1xNScZ-7QZzzMvU6C4HS7ng_ewRLrntcOHTNUCOdAuIE/edit?gid=541890420#gid=541890420)

# Intro

This is a set of recommendations for gear at each major stage of the game. I'll cite my reasons for some sets and why I dq'd others. It will be subdivided into sections for Gear, and Food per level. Additionally, I will be subdividing gear sections into

- **Low End:** Starter gear, for your first time at that instance and if you don't really have the most money. This is not meta, but is easy to get and very cheap to make (and is sufficient for on level instances)
- **Mid End:** Mid level gear for if you have more money and can afford to create stronger gear. Use these recommendations if you want to be stronger.
- **High End:** The Best In Slot (BIS) items for anything. These items *can* be very, very expensive. This slot may contain P2W items or items that are impractical to get without a huge amount of accumulation, or even simply impossible to acquire under current game updates.

### Just Disclaimers
- EVERYTHING IS IMO. There are other ways to play the game.
- Many of the decisions are class blind. I try to specify when something will be build/class specific, but that doesn't mean that this will be end-all be-all accurate for every dps class.
- This post was made 2024-06-15 and covers the situation of gear in AK at this time. This means that some of the info may become outdated over time.
- This post is PVE DPS targeted. This means I won't be covering PVP sets. I think that PVP sets are pretty easily optimized because there's really only like 3 sets, and enchantment cards for costumes are also very linear. 
- I make a few assumptions and cases regarding your permastats (eg from achievements, and archive) throughout. This means that some of the recommendations may not be optimal for you. I will try to specify which ones will.
- I intentionally avoid Anima Crystals. There's literally about a billion of them in the game, and which one is best is extremely class and context specific. In general, the gold ones are better.
- I also avoid books (aura manuals). They are not necessarily a gear item that's "built", and are frequently prohibitively expensive. I run damage calculations without taking them into account, with the exception of some rare gears (the s15 holy spirits) that require fusion books to achieve full potential.

### Knowledge :tm:
- This game values certain stats far more than others. Irregardless of class, AK is a game that values dps output. **With the exception of Guardian after rework, which will scale on DEF** and can ignore parts of this guide, and **full support Bard builds**, all other classes should prioritize DPS output.
  - If you're curious about bard/tank builds, feel free to contact me on discord.
- There are 2 great places in the game for testing your gear. There's a [training dummy](https://www.aurakingdom-db.com/npc/47941-wood-pile-for-training) in **<u>Acadian (197,121)</u>**, which can be debuffed but will die (it has 2 billion HP). The second one is an [immortal totem](https://www.aurakingdom-db.com/npc/40227-corpser-totem) in **<u>Candeo Marsh (683,190)</u>** which can't be debuffed but is good for testing your own combat procs.
- If you're interested in a lot of the theory behind the gear, check out [Lind's Optimization Theory](https://docs.google.com/document/d/1b-M2polFzj3pV454YmjxTUDkkX6pY1-72HnwiTJgOw8/edit?usp=sharing). It provides a lot of basic ideas for how damage is calculated in this game. While the formulas are not precise and exclude coefficients, it is in essence how we optimize gear.
- Two types of elemental cores in gear matter.
  - For weapons, the element of the weapon grants 20% elemental damage for that element, only for skills fired by that weapon. Thus, prioritize whatever elements are meta for your class (and more specifically your build).
  - For armor, the element of the chestpiece grants elemental damage reduction against that element. This makes the core of the chestpiece much more irrelevant in comparison, but with the knowledge that most bosses in the game are dark, you should prefer dark.
- When crafting green into orange, the closer the % of the green item is to max (120%), the higher the chance is that the orange armor will have a higher percentage. It is not a guarantee but I would suggest you use 120% greens or close to maximize your chance of not having to reroll.
- Orange armor takes many different types of cores. While we consider Bestial to be the best because of how HP scales better than Eva and Def, the real dps difference is mostly insignificant (and indeed def may be more useful to many people because people tend to have a lot of hp% scalers and few def% ones). Also consider Blessed for xp if you grind dungeons, and Imperial if you're rich and want to move fast.
- Rerolling armor percentages is mostly redundant because it grants only small amounts of Def. However, rerolling weapons to at least a reasonably high % is a must. Gold weapons go up to 140%, and Orange up to 130%; try to stay within 10% of the max. 

# Masteries

Acquiring a gold mastery may be somewhat difficult. Some of these golds can be bought from the DP store using Eternia, but others are just rng drops. Orange is mostly fine though.

- **<u>General Skills:</u>** This is meant to be a class specific mastery. Choose something that's best for your class and fits your dps rotation, typically a dmg% or def shred skill.
- **<u>Attack Spec:</u>** This is always [Gold Zeal](https://www.aurakingdom-db.com/item/28016-lecture-on-zeal). It is essentially a flat +11% damage boost due to how zeal works in this game.
- **<u>Advanced Skills:</u>** This will also be class specific.
- **<u>Defense Spec:</u>** This spec rarely matters for DPS output. Most people use [Extreme Speed](https://www.aurakingdom-db.com/item/28048-lecture-on-extreme-speed). Iron Wall may be used if you need Def that bad, but we prefer to use The Best Defense in Special Skills.
- **<u>Tactical Spec:</u>** This is typically [Break Defense](https://www.aurakingdom-db.com/item/28056-lecture-on-break-defense). The relatively new "Element Wave" masteries are also very good though, especially because everyone and their last 3 generations of ancestors are using Break Defense in your party anyway (and it doesn't stack)
- **<u>Special Skills:</u>** For newer players, use [The Best Defense](https://www.aurakingdom-db.com/item/28411-lecture-on-the-best-defense). Given that you scale dmg pretty hard, this is a one stop shop for capping defense. If you are stronger, use [Deep Blue](https://www.aurakingdom-db.com/item/28417-lecture-on-deep-blue), a 5% dmg boost. Late game players also use Capoeira or Omniscience to get overcap stats.

# Holy Chest

This one is simple. I suggest using one of the weapons from each abyss (Nazrudin, Yarnaros, Zaahir, Quelkulan) and then stack +DMG to Dark% (you can throw in a few others if you want, but try to focus on dark) bonuses. Most bosses in the game are dark.

AHC is not something that is "built", so I ignore it. If you want to know what is optimal to sacrifice, check out my [calculator sheet](https://docs.google.com/spreadsheets/d/12VrRiIP0SYDZVBeT1wFezqMmhtLXvo5Ukb6gn2resv4/edit?gid=0#gid=0) on it.

# Weapon Mastery

You receive **140 points TOTAL** from 70 levels in either path. In general, the last 20 points can be fairly difficult to get before s1. You'll get these over time. The following are listed in order of priority for low level players:

- 20 points in Crit Dmg
- 30 points in Dmg
- 15 points in Accuracy (this can be class dependent - Dragonista procs huge acc from Envoy)

That makes up 65 points. Accuracy may be reset at later levels, but is absolutely important for a long time (probably up to s20).

Most players will elect to put at least 15 into MSPD, and you should highly prioritize the 20 points put into Dmg to Dark bosses, since they are the most common boss type in the game. Elemental Resist is decent for survival if you are lacking in that.

The rest is up to you to make up for deficiencies in your build (for instance, I like to put points into Crit because it tends to be nerfed below the cap in instances for me, but late game players may want to put into SPD for higher overcap Zeal chance).

# Enchantment Cards

At most levels, just use whatever enchantment card is highest level. Orange > Green > Blue, but all of them give the same amount of pen. For armor, Dmg is typically considered to be the best, but Crit is definitely worth it because capping crit in instances is an eternal struggle. 

For weapon enchantment cards, we like Dmg > Crit > Crit Damage for dps reasons, but MSPD cards are also fine. It depends on what you want! For the sub proc, preferably use the zeal (or double damage) proc, but the crit and spd procs are also acceptable.

# Costumes

All you really need is orange costumes. You may not have the gold capital to get the costumes you want yet. Depending on how much DP you have, buy the Blue cards from the DP shop, and you can buy Premium enchantments from LP. 

It is <u>REALLY</u> important that, if you are using a gold card, you apply *both* enchantment cards by first enchanting the blue card with the gold card, and then the costume with the blue card. 

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| **Head:** [Damage against Bosses Mastery](https://www.aurakingdom-db.com/item/12215-enchantment-card-damage-against-bosses-mastery) & [Any Premium](https://www.aurakingdom-db.com/items?q%5Bname_cont%5D=Premium&q%5Btype_id_eq%5D=10125&q%5Bquality_eq%5D=6) | **Head:** [Damage against Bosses Mastery](https://www.aurakingdom-db.com/item/12215-enchantment-card-damage-against-bosses-mastery) & [Any Super Enchantment](https://www.aurakingdom-db.com/items?q%5Bname_cont%5D=Super&q%5Btype_id_eq%5D=10125&q%5Bquality_eq%5D=6) | **Head:** [ Damage against Bosses Mastery](https://www.aurakingdom-db.com/item/12215-enchantment-card-damage-against-bosses-mastery) & [Any Abyss](https://www.aurakingdom-db.com/items?q%5Bs%5D=quality+desc&q%5Bname_cont%5D=Abyss&q%5Btype_id_eq%5D=10125&q%5Bquality_eq%5D=6) |
| **Face:** Blue Class Specific Card & [DMG Premium](https://www.aurakingdom-db.com/item/40559-premium-facemask-enchantment-dmg) | **Face:** Blue Class Specific Card & [DMG/CRIT Super](https://www.aurakingdom-db.com/item/41268-super-face-enchantment-dmg-crit) | **Face:** Blue Class Specific Card & [Any Abyss](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Abyss&q%5Btype_id_eq%5D=10126) | 
| **Body:** [CRIT Damage Against Bosses Mastery](https://www.aurakingdom-db.com/item/12216-enchantment-card-crit-damage-against-bosses-mastery) & [DMG Premium](https://www.aurakingdom-db.com/item/40547-premium-costume-enchantment-dmg) | **Body:** [CRIT Damage Against Bosses Mastery](https://www.aurakingdom-db.com/item/12216-enchantment-card-crit-damage-against-bosses-mastery) & [DMG/CRIT Super](https://www.aurakingdom-db.com/item/41262-super-costume-enchantment-dmg-crit) | **Body:** [CRIT Damage Against Bosses Mastery](https://www.aurakingdom-db.com/item/12216-enchantment-card-crit-damage-against-bosses-mastery) & [Any Abyss](https://www.aurakingdom-db.com/items?q%5Bs%5D=quality+desc&q%5Bname_cont%5D=Abyssal&q%5Btype_id_eq%5D=10127) |
| **Back:** [Extreme Speed Mastery](https://www.aurakingdom-db.com/item/12223-enchantment-card-extreme-speed-mastery) & [DMG Premium](https://www.aurakingdom-db.com/item/40553-premium-back-accessory-enchantment-dmg) | **Back:** [Extreme Speed Mastery](https://www.aurakingdom-db.com/item/12223-enchantment-card-extreme-speed-mastery) & [Either of the DMG Supers](https://www.aurakingdom-db.com/items?q%5Bname_cont%5D=Super+Back+Enchantment-DMG&q%5Btype_id_eq%5D=10128) | **Back:** [Extreme Speed Mastery](https://www.aurakingdom-db.com/item/12223-enchantment-card-extreme-speed-mastery) & [Any Abyss](https://www.aurakingdom-db.com/items?q%5Bname_cont%5D=Abyss&q%5Btype_id_eq%5D=10128) |
| **Weapon:** Blue Class Specific Card & [DMG Premium](https://www.aurakingdom-db.com/item/40565-premium-weapon-enchantment-dmg) | **Weapon:** Blue Class Specific Card & [DMG/CRIT Super](https://www.aurakingdom-db.com/item/41271-super-weapon-enchantment-dmg-crit) | **Weapon:** Blue Class Specific Card & [Any Abyss](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Abyssal&q%5Btype_id_eq%5D=10129) |

Super & Abyss costume cards are typically relegated to para only drops. Super cards tend to be much more common than Abyss cards though, and are consequently much more affordable. On the other hand, the laughably easy accessibility of Premium cards (via the LP shop) makes them trivial to obtain and frequently are "good enough". Many simply try to go from Premium to Abyss.

# Level 1-79

### Gear

The first 80 levels are considered the "tutorial" levels of the game. While in the past the xp curve was much harder, with the addition of s levels up to 35, these are now really trivial and are thus not worth using gold on. Use the gear acquired from the [leveling rewards](../levelingrewards/) to get through these levels. 

The Advanced Aura gear is quite nice until it hits it's scaling level cap. 

Remember to use proof of missions, and happy questing.

It does not need to be fortified to get through them, although you may choose to do so now that fortification transfer scrolls are free.

### Consumables

If this is your first character, you will also have received a Gaia Cube. This will also award you gear, along with some food.

# Level 80-89

**Summary:** Your gear is still not very relevant, due to the tutorial esque setting of main questing. However, it's the first point where you have the chance to make "real gear". Most players can and will skip this stage entirely due to how long it takes (and you'll just blow past it 99% of the time by questing anyway).

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| Level 85 Gold - Incredibly easy to acquire because it's free from DP book. | Level 80 Ghodroon Weapon - Blacksmithing, but also received for free from envoy cube. | N/A |
| SUB: Blue Noct | SUB: Blue Noct | SUB: Level 80 Ghodroon Weapon (Blacksmithing)

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

At this point of the game, you don't need to care too much about cores or on element. In reality, none of these weapons are particularly hard to get, and almost anything will work. 

For the sub weapon, find a Nocturnal blue weapon by searching "Precious Chests" that drop from mobs in instances every so often. You can find a gold sub or make an orange if you want, but once again... it really doesn't matter. Fortifying your weapon also shouldn't matter much here.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | [Level 80 Lordswrath](https://www.aurakingdom-db.com/item/16388-lordswrath-hat) - Received for free from envoy cube. Keep this so you can give it to your alts later, because you do not receive level 80 gear from the gaia boxes. | N/A |
  - At a time where you have no scaling stats, 30% crit damage to bosses helps fill up your crit damage cap. 10% raw dmg is also a really significant multiplier when you have almost no other raw dmg stats.
  - For enchantment cards, simply use whatever you have. Level 80 cards aren't particularly good, and are honestly kind of difficult to get. You shouldn't really need it.

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | [Level 80 Lordswrath](https://www.aurakingdom-db.com/item/16392-lordswrath-belt) - Once again, received for free. | N/A |
  - Simply a stronger version of the top set, with 12% dmg and 35% crit damage. 
  - For enchantment cards, simply use whatever you have.

**Trophy**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| [Level 80 Lost Bewitching Bones](https://www.aurakingdom-db.com/item/16506-lost-bewitching-bones) | [Level 70 Guzigla's Bloodied Tooth](https://www.aurakingdom-db.com/item/14965-guziglas-bloodied-tooth) - provides 11% d-dmg. | N/A |
| [Level 80 Lost Memory Rune](https://www.aurakingdom-db.com/item/16508-lost-memory-rune) | [Level 85 Zahr-Kazaal's Icy Spine](https://www.aurakingdom-db.com/item/17459-zahr-kazaals-icy-spine) - provides an early source of defense shred. | N/A |

In reality, any other trophy can work here. Level 80 is a time when you are not gated by anything.

**Accessories**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| Anything | [Level 85 Fallen Apostle's Set](https://www.aurakingdom-db.com/item/17845-rabisus-crystal-of-symbiosis). Can be bought from the DP shop without needing ST crests unlike the next one. | N/A |
| Anything | [Level 85 Lost Memories Set](https://www.aurakingdom-db.com/item/17311-vickis-love). Must be acquired from ST or use 20 ST sigils to get. | N/A |

- Fallen Apostle: This provides 8% damage taken. Most importantly, it's free! With no side currency required! 
- Lost Memories: You'll need at least 75 ST sigils later to buy Agni's at SLv5. If you think it will take you a really long time to get to S5 and have the sigils to spare, you can get this.
  - A shockingly powerful 40% def shred. You don't get anywhere close to this even at much higher levels. However, there is a 50% cap on % based def shred.

**Mount**

- Elemental damage % will always be the best until later.

**Secret Stones**
- Buy secret stones for armor from the shop that are in accordance with your class. You will upgrade them to purple later.
- For your weapon, buy Lava Secret Stones. They can be dropped from Pyroclastic Purgatory or just bought from AH. 

**Emblem**
- Use anything. Try to get elemental damage if possible on a gold emblem.

### Consumables

**Food:** [Dreamy Heaven](https://www.aurakingdom-db.com/item/18137-dreamy-heaven) provides triple strike and significant damage.

**Drink:** [Golden Latte](https://www.aurakingdom-db.com/item/18157-golden-latte) provides 12% detail damage (not dmg, that's a mistl)

# Level 90-99

**Summary:** Make full gear, including weapon, top/bottom armor, trophies, and accessories. This is the foundation for your awakening levels. Make sure you're not missing a decent mount or secret stones.

The first phase where fortifying and creating armor is mandatory to some extent. Marked by preparing for Awakening, you must have fairly powerful gear to cross the gear check. While you can skip meta gear and forts with the LP awakening method, this results in you being very weak in the early S levels. I highly suggest you craft level 90 gear. 

This is because, if you do decide to skip 90 gear, you may find yourself forced to create s1 forest gear. However, forest gear is relatively weak for orange armor, and the first decent gold armors do not appear until s5.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) Level 95 Gold - DP book | (+20) Level 95 Gold - DP book | (+30) Level 90 Nalani Weapon - Blacksmithing |
| N/A | (+20) Level 90 Nalani Weapon - Blacksmithing | N/A |
| SUB: (+10) Blue Nocturnal | SUB: (+20) Level 90 Nocturnal Nalani - Blacksmithing | SUB: (+30) Level 90 Nocturnal Nalani - Blacksmithing

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.


- Gold Weapon: A strong case for gold weapons is the ability to dump them into Holy Chest afterwards. They're also really cheap.
  - +20 at least, Use level 90 weapon cards for DMG or CDMG.
  - Ensure that it is on element. This gives you a 20% elemental damage boost for that element.
- Nalani Weapon: Almost always more powerful. For main weapon, try to get a Destroyer core as meta. Lower tier cores are acceptable, especially Deadly or Fell because you're likely lacking in Crit Damage or Accuracy at this time.
  - Ensure that it is on element. This gives you a 20% elemental damage boost for that element.
  - +20, Use level 90 weapon cards for DMG or CDMG.
  - The core for the weapon at the moment is not the most important. Destroyer is the best, but may be particularly expensive. Just ensure it's reasonably good (Deadly is a frequent substitute I see)
- Level 90 Nocturnal Nalani Weapon - Blacksmithing
  - If you have a level 80 orange noct weapon, you may choose to skip this. 
  - +20, Use level 90 weapon cards for DMG or CDMG.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit | (+30) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit |

- [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night): This set is a necessity, even for poorer players, as it's the first real set you will ever make. You also receive this for free from the Envoy cube, which is awfully convenient.
  - 12% detail damage dealt and 35% cdmg is the most powerful orange core set you can have.
  - +20 the set and use level 90 enchantment cards.
  - This is definitively better than the Magic Sundering top set! It gives 4% more detail damage. 

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) - Blacksmithing, also known as Magic Sundering set. | (+30) [Level 90 Holy Anthem](https://www.aurakingdom-db.com/item/17994-holy-spirits-belt-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set | 
| N/A | (+20) [Level 90 Holy Anthem](https://www.aurakingdom-db.com/item/17994-holy-spirits-belt-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set | (+30) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) - Blacksmithing, also known as Magic Sundering set. |

- A comparison of Holy Anthem and Abyssal Naught set:
  - Abyssal Naught grants 10% dmg% and a 15% chance to proc 10% crit, 20% cdmg. 
  - Holy Anthem gives 12% dmg% and 40% cdmg to bosses. 
  - Abyssal Naught is a lot easier to get, because it's dropped from the envoy cube. However, Holy Anthem is technically strictly better 
  - I claim that Abyssal Naught (or Magic Sundering) is better for mid end players because you get it for free from the envoy cube. It's clearly worse, but not having to pay for smithing is a huge plus for people trying to be a little economical.
  - A strong argument for Holy Anthem is that most players will skip s1 gear and even retain it for s5-s10. This means that many players will keep their bottom sets past the point where they build Agni's so the extra cdmg is actually highly relevant even when other cdmg sources come in and you cap.

**Trophy**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [Level 70 Guzigla's Bloodied Tooth](https://www.aurakingdom-db.com/item/14965-guziglas-bloodied-tooth) | (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | 
| (+20) [Level 85 Zahr-Kazaal's Icy Spine](https://www.aurakingdom-db.com/item/17459-zahr-kazaals-icy-spine) | (+20) [Level 95 Dabaka's](https://www.aurakingdom-db.com/item/20213-dabakas-makeshift-contraption) | (+30) [Level 95 Dabaka's](https://www.aurakingdom-db.com/item/20213-dabakas-makeshift-contraption) |
| N/A | (+20) [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings) | (+30) [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. You can keep this until s35, so +20 it at least for now and +30 over time.
- [Level 95 Dabaka's](https://www.aurakingdom-db.com/item/20213-dabakas-makeshift-contraption)
  - Defense shred. +20 it. This is second BIS because of the flat def shred. The 50% def shred cap means that this can be useful during a time where an unreliable proc from Delfonia's may not be ideal
- [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings)
  - A +35% dmg on next attack trophy. It's very strong, however requires 10% chance on a crit (which should be 100% of the time) and can occur at most every other attack.
- [Level 70 Guzigla's Bloodied Tooth](https://www.aurakingdom-db.com/item/14965-guziglas-bloodied-tooth)
  - Provides 11% d-dmg. Carryover from level 80.
- [Level 85 Zahr-Kazaal's Icy Spine](https://www.aurakingdom-db.com/item/17459-zahr-kazaals-icy-spine)
  - Provides an early source of defense shred. Carryover from level 80.
- Any other damage taken/def shred trophy is also theoretically fine

**Accessories**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book | (+30) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book |

- [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy): A gold set acquirable for 9k gdp from the DP book or by searching Hall of Philae. 
  - By far the only viable meta set because of the Bewildered status. This grants 30% Crit Damage, and 50% Max Crit Damage. This can be used until you acquire Agni's.

**Mount**
- Use a **Level 4** Elemental Dmg % mount (or whatever is highest level at the time of reading).

**Secret Stones**
- Buy secret stones for armor from the shop that are in accordance with your class. UPGRADE THEM TO PURPLE by leveling it to level 70, and then using 10 rainbow stones! From now on, I will assume you have purple stones.
- For your weapon, buy Lava Secret Stones. They can be dropped from Pyroclastic Purgatory or just bought from AH. 
  - Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Use elemental damage if possible on a gold emblem.

### Consumables

**Food:** 
- [Cheesy Tomato Ciabatta](https://www.aurakingdom-db.com/item/19099-cheesy-tomato-ciabatta) provides MSPD and XP%
- [Creamy Chicken Pie](https://www.aurakingdom-db.com/item/19270-creamy-chicken-pie) provides triple strike

**Drink:**
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Golden Latte](https://www.aurakingdom-db.com/item/18157-golden-latte) provides 12% detail damage (not dmg, that's a mistl)

# Level S1-S4

**Summary:** Not much needs to be upgraded here other than optional upgrades to weapon, and one of your trophies. You should be consolidating your gear from the 90s. Scoop up a random Holy Spirit (the new gear slot).

Welcome to the s levels! The early awakening levels are marked by a lack of gear improvement. The unlocked gear is not good enough (in fact, sometimes worse) to justify immediate upgrades if you have sufficiently powerful level 90 gear. Most players who don't have significant gold reserves will be coming off of spending on level 90 gear, especially given how fast the level 90 phase is. Consequently, many elect to skip this phase entirely and build at s5.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) Level 95 Gold - DP book | (+25~30) Level 95 Gold - DP book | (+30) S1 Bloodmoon Weapon - Blacksmithing |
| N/A | (+25~30) Level 90 Nalani Weapon - Blacksmithing | N/A |
| SUB: (+20) Level 90 Nocturnal Nalani - Blacksmithing | SUB: (+20) Level 90 Nocturnal Nalani OR (+20) S1 Nocturnal Bloodmoon - Blacksmithing | SUB: (+30) S1 Nocturnal Bloodmoon - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange. 

At this point in time, pen becomes a dominant scaling statistic. This narrows the gap between gold and orange in theory, because the real stats matter much less than how much pen it grants. s1-s5 is a very short period of time with XP curve reworks. You no longer need much power to get through, so keeping your level 90 weapon is a very viable strategy. If you're rich, you may choose to make new gear. However, I believe that no one is getting stat checked too hard as long as they have +25 or +30 level 90 weapons.

Most players will choose to skip this step entirely and wait until s5 to build again. At this point, cores in weapons aren't the *most* important, other than having a nocturnal sub.

- If you do use s1 gear, this provides you with an extra 2% pen at least. Use the highest level enchantment cards you can.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set. | (+20~30) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set. | (+30) [S1 Forest Wound](https://www.aurakingdom-db.com/item/19453-forest-leather-cap) - Blacksmithing |
- A comparison of the Holy Chant and Forest Wound sets:
  - The Holy Chant set gives 12% detail damage dealt and 35% cdmg is the most powerful orange core set you can have at level 90. This means you use level 90 cards.
  - Forest Wound set gives 12% detail damage, 35% cdmg
  - Note that the set bonus is not better! The advantage from crafting s1 is an extra 2% penetration from higher level cards. However, the cost of acquiring cores/recipes/etc can make this very unlikely to be worth it if you're not rich. That money may be better spent fortifying armor or preparing for s5+.
  - This is the reason why I only recommend crafting Forest armor for very rich people - you would craft this exclusively for raw stats/2% pen ;D
  - Additionally, you will have the chance to use s5 top armor, which is free, not horrible, and also provides the same pen.

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) - Blacksmithing, also known as Magic Sundering set. | (+20~30) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) or [Level 90 Holy Anthem](https://www.aurakingdom-db.com/item/17994-holy-spirits-belt-of-the-blazing-night) | (+30) [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt) - Blacksmithing |
- [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss). Orange, also known as Magic Sundering set.
  - Once again, Holy Spirit IS better! But you likely carried over Abyssal Naught from level 90 instead of Holy Spirit. If you have that carried over, use it instead
  - 10% dmg% and 40% cdmg to bosses. Highly meta, especially with the relatively powerful proc skill.
  - +20 the set and use level 90 enchantment cards.
- [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt). Orange, also known as Forest set
  - 10% dmg, 35% cdmg to bosses. 
  - +20 the set, use s1 cards
  - This set is *worse* than the level 90 set. Once again, all you get out of this is the pen from cards & slightly higher raw stats.

**Trophy**

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [Level 95 Dabaka's](https://www.aurakingdom-db.com/item/20213-dabakas-makeshift-contraption) | (+20) [S1 Souler - Deadly Ice Ring](https://www.aurakingdom-db.com/item/19588-souler-deadly-ice-ring) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| (+20) [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings) | (+20) [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. It cannot be overstated how impactful the elemental damage is; even if you have a ton of archive and have like 200% ele damage, this is still easily at least a 10% dps increase. Keep working on +30ing it. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
  - From now on, every trophy section will essentially be "Cultural Relic + every 10th level orange item".
- [S1 Souler - Deadly Ice Ring](https://www.aurakingdom-db.com/item/19588-souler-deadly-ice-ring)
  - A decent def shred crafted trophy. +20 it. Use if you don't use Bond and have some money.
  - Def shred becomes really powerful after a certain point. Reducing a mob's defense value from .8 to .75 (by just 6%) is enough to 1.5x your damage under certain circumstances.
- [Level 95 Dabaka's](https://www.aurakingdom-db.com/item/20213-dabakas-makeshift-contraption)
  - Defense shred. +20 it.
  - Grants weaker def shred than souler, along with not giving crit damage to bosses. Does give more raw dmg though, so bard heal builds may like this more.
- [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings)
  - A +35% dmg on next attack trophy. It's very strong, however requires 10% chance on a crit (which should be 100% of the time) and can occur at most every other attack.
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus (later, at s20, you may encounter spd problems when using it, but for now it's strictly better).
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Bond > Relic + Souler`, assuming you have the damage to support bond being better than relic.

**Accessories**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book | (+30) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book |

- [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy): A gold set acquirable for 9k gdp from the DP book or by searching Hall of Philae. 
  - By far the only viable meta set because of the Bewildered status. This grants 30% Crit Damage, and 50% Max Crit Damage. This can be used until you acquire Agni's.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

A new armor slot unlocked by being in awakening levels. Most normal Holy Spirits are acquired from DT, with the exception of the gold upgrades which are unlocked from combining the former orange and a recipe dropped from nightmare dungeons, along with some other exclusive Holy Spirits acquired from para for instance. This means that you will likely need to either run DT or buy the item from someone else.

**Note**: When you create a gold holy spirit later on, you *will* lose all of the fortification levels you make on this holy spirit. Thus, if you intend to use an s5 holy spirit, DON'T fortify this holy spirit much (or only as much as you are happy with losing later)

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20) [S1 Golden Horn](https://www.aurakingdom-db.com/item/21612-golden-horn) | (+30) [S1 Golden Horn](https://www.aurakingdom-db.com/item/21612-golden-horn) |
| N/A | (+20) [S1 Night Owl Arrow](https://www.aurakingdom-db.com/item/21612-golden-horn) | (+30) [S1 Night Owl Arrow](https://www.aurakingdom-db.com/item/21612-golden-horn) |

- [S1 Golden Horn](https://www.aurakingdom-db.com/item/21612-golden-horn)
  - Provides def shred. It's my opinion that this is better, because you should really have cap crit (even accounting for instance nerfs) at this level if you take into consideration other crit sources. Additionally, it's a decent amount of flat def shred (2.5k of it almost) over the % cap.
  - IF YOU ARE INTENDING ON UPGRADING TO GOLD, THIS BECOMES WORSE THAN NIGHT OWL ARROW!! It will lose it's def shred and the night owl arrow has better bonuses at s5 gold upgrade. Thus, only choose this if you are interested in s1 tier power only.
- [S1 Night Owl Arrow](https://www.aurakingdom-db.com/item/21613-night-owl-arrow)
  - Provides 10% crit rate. Clearly still decent, especially if you're crit capped. 
  - This is worse, but becomes better than Golden Horn if you upgrade it at s5.

These items can be rerolled. Focus on getting good stats like dmg to dark, crit damage, etc that you're lacking.

### Consumables

**Food:**
- [Cheesy Tomato Ciabatta](https://www.aurakingdom-db.com/item/19099-cheesy-tomato-ciabatta) provides MSPD and XP%
- [Oriental Beauty Steamed Milk](https://www.aurakingdom-db.com/item/21048-oriental-beauty-steamed-milk) provides 15% d-dmg

**Drink:** 
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Gold Essence Tea](https://www.aurakingdom-db.com/item/21060-gold-essence-tea) 15% triple strike.
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Golden Latte](https://www.aurakingdom-db.com/item/18157-golden-latte) provides 12% detail damage (not dmg, that's a mistl)

# Level S5-S9

**Summary:** YOU MUST GET AGNI'S! Upgrade weapon if you like golds, with optional upgrades to top armor and a trophy. Continue consolidating your old gear.

A phase of intermediate gear improvement. At this point, you should be +30ing your main weapon because of the considerable stat bonuses that the +30 stage bonuses bring. You should not be leveling so fast that you will replace it in a short time.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) Level 95 Gold - DP book | (+25~30) S5 Gold - DP book | (+30) S1 Bloodmoon Weapon - Blacksmithing |
| N/A | (+25~30) S1 Bloodmoon Weapon - Blacksmithing | (+30) S5 Gold - DP book |
| SUB: (+20) Level 90 Nocturnal Nalani - Blacksmithing | SUB: (+20) Level 90 Nocturnal Nalani OR (+20) S1 Nocturnal Bloodmoon - Blacksmithing | SUB: (+30) S1 Nocturnal Bloodmoon - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

Weapons will continue to change relatively slowly. Orange continues to be consistently better, but the s5 gold weapon is always a not-totally-terrible option, and can bring a much needed pen boost. Many players (including me) tend to just upgrade to each gold weapon in order after this point (s5 -> s15 -> s25 ...)

Most gold weapons work in a class specific way by boosting a dps skill. If the dps skill is not the one you typically use, that is a good indication that it may not be reasonably good compared to orange.

However, if you are very highly built eidolon archive wise, be careful of overcapping on crit damage (which the orange weapons give)! You may only use as much crit damage as you have cap, and orange weapons are great primarily because of their CDMG to bosses (which counts towards the cap). 

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set. | (+20~30) [Level 90 Holy Chant](https://www.aurakingdom-db.com/item/17990-holy-spirits-hat-of-the-blazing-night) - Blacksmithing, also known as Holy Spirit set. | (+30) [S1 Forest Wound](https://www.aurakingdom-db.com/item/19453-forest-leather-cap) - Blacksmithing |
| N/A | (+20~30) [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - VOE, also known as Eternia Set | N/A |
- A comparison of the Holy Chant and Forest Wound sets:
  - The Holy Chant set gives 12% detail damage dealt and 35% cdmg is the most powerful orange core set you can have at level 90. This means you use level 90 cards.
  - Forest Wound set gives 12% detail damage, 35% cdmg
  - Note that the set bonus is not better! The advantage from crafting s1 is an extra 1% pen per gear item from higher level cards. However, the cost of acquiring cores/recipes/etc can make this very unlikely to be worth it if you're not rich. That money may be better spent fortifying armor or preparing for s5+.
  - This is the reason why I only recommend crafting Forest armor for very rich people - you would craft this exclusively for raw stats/2% pen ;D
- [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - This is a free set, which is super nice. Because you can exchange for tons of copies of this from VOE (which you should have been running), you can also easily get this to a very high star for free. Use LP to get each to 3 stars, then combine those.
  - Provides 10% dmg%, 10% damage dealt to all elements. 
  - Provides you the same amount of pen as s1 gear while being much cheaper
  - This upgrade loses you all of the cdmg from holy chant, along with 2% d-dmg, BUT: Allows you to use s1 enchant cards (eg more pen) and higher base stats. This makes it a compelling upgrade for those at s5 who need a minor power boost, while being almost completely free.

**Bottom Armor**

Nothing changes here.

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) - Blacksmithing, also known as Magic Sundering set. | (+20~30) [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss) - Blacksmithing, also known as Magic Sundering set. | (+30) [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt) - Blacksmithing |
- [Level 90 Abyssal Naught](https://www.aurakingdom-db.com/item/18009-magic-sundering-belt-of-the-abyss). Orange, also known as Magic Sundering set.
  - 10% dmg% and 40% cdmg to bosses. Highly meta, especially with the relatively powerful proc skill.
  - +20 the set and use level 90 enchantment cards.
- [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt). Orange, also known as Forest set
  - 10% dmg, 35% cdmg to bosses. 
  - +20 the set, use s1 cards
  - This set is *worse* than the level 90 set. Once again, all you get out of this is the pen from cards & slightly higher raw stats.
- [S5 Fading Time Set](https://www.aurakingdom-db.com/item/19748-eternias-destiny-girdle)
  - This set is not recommended because of how much you lose. The set grants 10% crit rate, 20% cdmg, and 6% zeal chance. Magic Sundering has a significantly stronger set bonus. Although you could theoretically upgrade to this if you met the conditions of 1.) sufficient Crit & CDMG from external sources 2.) Need Pen, this case is *really* rare.
  - The zeal chance can be really funny if you proc it though, and it *is* free, so it's really up to you. I leave to you the fact that it gives you <u>no raw dps output improvement over magic sundering</u> according to dmg calc, except in very specific situations.

**Trophy**

Very little changes here, with the exception of Fatima's Thunder Boost becoming technically better than Souler. However, this being worth building is rare due to the fort costs. Additionally, you will have a strong case to build trophies at s10 anyway, so building Fatima's won't last long unless you skip s10.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S5 Fatima's Thunder Boost](https://www.aurakingdom-db.com/item/19593-fatimas-thunder-boost) | (+20) [S5 Fatima's Thunder Boost](https://www.aurakingdom-db.com/item/19593-fatimas-thunder-boost) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| (+20) [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings) | (+20) [S1 Souler - Deadly Ice Ring](https://www.aurakingdom-db.com/item/19588-souler-deadly-ice-ring) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. It cannot be overstated how impactful the elemental damage is; even if you have a ton of archive and have like 200% ele damage, this is still easily at least a 10% dps increase. Keep working on +30ing it. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
  - From now on, every trophy section will essentially be "Cultural Relic + every 10th level orange item".
- [S5 Fatima's Thunder Boost](https://www.aurakingdom-db.com/item/19593-fatimas-thunder-boost)
  - Grants 25% CDMG and a 10% chance to grant 50% dmg on the next attack. This is clearly better than Delfonia's and thus knocks it off the list.
  - This is better than Souler because of the CDMG. However, building a new gold trophy may be questionable.
- [S1 Souler - Deadly Ice Ring](https://www.aurakingdom-db.com/item/19588-souler-deadly-ice-ring)
  - A decent def shred crafted trophy. +20 it. Use if you don't use Bond and have some money.
  - Def shred becomes really powerful after a certain point. Reducing a mob's defense value from .8 to .75 (by just 6%)is enough to 1.5x your damage under certain circumstances.

- [Level 95 Delfonia's Exquisite Earrings](https://www.aurakingdom-db.com/item/18321-delfonias-exquisite-earrings)
  - A +35% dmg on next attack trophy. It's very strong, however requires 10% chance on a crit (which should be 100% of the time) and can occur at most every other attack.
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus (later, at s20, you may encounter spd problems when using it, but for now it's strictly better).
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Bond > Relic + Souler`, assuming you have the damage to support bond being better than relic.

**Accessories**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+20) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book  | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy):
  - If you do not have the crit damage to overcap your crit damage by at least 50%, wild howl is still likely better for you to *use*. However, this is typically not an excuse to not build agni's. You can continue using this, but build agni's on the side.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

At s5, you are introduced to upgraded gold tier holy spirits. They are strictly better than the base versions (and will even provide some pen at later levels). However, they require you to grind nightmare dungeons for the recipe (although they may be bought off of AH for relatively cheap and they have a high drop rate), AND a crafting cost of 1000g. Consequently, treat these upgrades as easy to access, but expensive in nature. 

**Note**: You need an orange base holy spirit to upgrade. Presumably, you are using your s1 holy spirit. However, the upgrade will wipe out any fortifications you have. Thus, if you have significant fortifications on your s1 HS, you may choose not to upgrade here.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20) [S5 Night Owl Arrow](https://www.aurakingdom-db.com/item/21617-night-owl-arrow-of-the-fierce-soul) | (+30) [S5 Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) |
| N/A | (+20) [S5 Golden Horn](https://www.aurakingdom-db.com/item/21616-golden-horn-of-the-warrior-soul) | (+30) [S5 Night Owl Arrow](https://www.aurakingdom-db.com/item/21617-night-owl-arrow-of-the-fierce-soul) |

- [S5 Night Owl Arrow](https://www.aurakingdom-db.com/item/21617-night-owl-arrow-of-the-fierce-soul)
  - The upgrade makes the night owl arrow better than golden horn. It now provides a chance to provide not only 15% crit rate, but also 8% detail damage against bosses! This is great.
- [S5 Golden Horn](https://www.aurakingdom-db.com/item/21616-golden-horn-of-the-warrior-soul)
  - This upgrade honestly makes golden horn worse, unless you are holy element class. If you have golden horn from s1, I would consider keeping it. Instead of having def shred, the upgrade has some raw stats proc, and an 8% holy damage bonus. This is still reasonably strong if you are a holy element user, but otherwise is just worse than the s1 version.
- [S5 Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver)
  - The "pay to win" item in the Holy Spirit slot. Depending on what pen/ele%/d-dmg stats you have, this can be better even than the p2w God holy spirits unlocked at s15, due to the triple shot proc.
  - Most players acquiring p2w items will be at a very high level of progression in archive, and consequently should prefer this over the element God spirits. 
  - Provides 10% triple strike chance (!!), some pen, some mspd, a 20% def shred proc, and 20% ele skill dmg proc.


These items can be rerolled. Focus on getting good stats like dmg to dark, crit damage, etc that you're lacking.

### Consumables

**Food:**
- [Cheesy Tomato Ciabatta](https://www.aurakingdom-db.com/item/19099-cheesy-tomato-ciabatta) provides MSPD and XP%
- [Oriental Beauty Steamed Milk](https://www.aurakingdom-db.com/item/21048-oriental-beauty-steamed-milk) provides 15% d-dmg

**Drink:** 
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Gold Essence Tea](https://www.aurakingdom-db.com/item/21060-gold-essence-tea) 15% triple strike.
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Golden Latte](https://www.aurakingdom-db.com/item/18157-golden-latte) provides 12% detail damage (not dmg, that's a mistl)

# Level S10-S14 

**Summary:** Upgrading armor should be a very serious consideration. Optional upgrade to weapon, lots of new consumable unlocks, almost mandatory trophy upgrade.

As leveling starts to slow down, we gain access to much better (and much more expensive) armor and trophies as soon as we hit s10. Because of how much slower leveling is at this point, you will be using this gear for a long time - and thus may want to invest in it. 

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S5 Gold - DP book | (+25~30) S5 Gold - DP book | (+30) S10 Evil God Weapon - Blacksmithing |
| N/A | (+25~30) S10 Evil God Weapon - Blacksmithing | (+30) S5 Gold - DP book |
| N/A | SUB: (+20) S10 Nocturnal Evil God - Blacksmithing | SUB: (+30) S10 Nocturnal Evil God - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

At this point, if you are still using your level 90 weapon for a sub, you should really upgrade to s5 or s10. Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. | (+20~30) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. | (+30) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. |
| N/A | (+20~30) [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - VOE, also known as Eternia Set | N/A |

- [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - At this point, this becomes a little expensive just to craft. Make sure you are getting a core that is at least half decent. Ensure that the armor is dark core if possible to take advantage of the elemental reduction.
  - Provides 15% detail damage, 35% crit damage to bosses. It is strictly better than s5 eternia, and the only reason why you'd stick with eternia is if you wanted to be a little cheap about gear upgrades. 
  - Both Guardian Knight and Ninja sets (the other orange sets) are not strictly offensive, with Ninja providing p-heal and Guardian Knight being a defensive set. Thus, this is clearly the best.
- [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - This is a free set, which is super nice. Because you can exchange for tons of copies of this from VOE (which you should have been running), you can also easily get this to a very high star for free. Use LP to get each to 3 stars, then combine those.
  - Provides 10% dmg%, 10% damage dealt to all elements. 
  - Provides you the same amount of pen as s1 gear while being much cheaper
  - This upgrade loses you all of the cdmg from holy chant, along with 2% d-dmg, BUT: Allows you to use s1 enchant cards (eg more pen) and higher base stats. This makes it a compelling upgrade for those at s5 who need a minor power boost, while being almost completely free.

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. | (+20~30) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. | (+30) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. |
| (+20) [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt) - Blacksmithing, also known as Forest set. | (+20~30) [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt) - Blacksmithing, also known as Forest set. | N/A |

- [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set.
  - 12% detail damage and a proc for 15% crit rate to bosses, 15% crit damage to bosses.
  - This set is better than Guardian Knight (clearly) due to that set being defensive. It's also strictly better than Ninja, which also provides detail damage and crit rate, but less of both and no crit damage.
- [S1 Timber Fairy Blood](https://www.aurakingdom-db.com/item/19457-forest-belt). Orange, also known as Forest set
  - 10% dmg, 35% cdmg to bosses. 
  - +20 the set, use s1 cards
  - This set is compelling if and <u>only</u> if you a.) made it at s1 b.) have it at a reasonably high fortification level, and c.) are lacking crit damage. At this point in the game, detail damage becomes the second scaling stat in the game to become significant due to instance "damage dealt" nerfs. Consequently, the 12% from s10 is actually considered to maybe be better than 10% dmg and the extra crit damage, especially if you have a lot of it from elsewhere already.


**Trophy**

New orange s10 trophies make the old base trophies completely irrelevant.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+20~30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook) | (+20~30) [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| (+20) [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain) | (+20) [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. Keep working on +30ing it. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook)
  - Grants a good amount of raw stats, but more importantly has a 15% proc for 10% boss damage. At this stage of the game your detail damage becomes important as your crit damage slowly becomes diminishing returns.
  - +30 this if you intend to keep it past s20, and +20 it otherwise.
  - Use as the 2nd trophy in a pair with cultural relic. 
- [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain)
  - A decent cdmg crafted trophy. +20 it. Use if you don't use Bond and have some money.
  - Essentially just grants 50% crit damage and some crit rate. Assuming you have 400% or less crit damage (make sure you're calculating crit damage correctly, not just looking at the profile stats) or higher, 50% *may* be worth it compared to Codebook. However:
  - Most players with archive will have so much crit damage that they're capped anyway. Also, you will get more cdmg in the future. For this reason, if you have 400% or more cdmg, you are getting capped over agni's and it's not worth it. Also, you are likely lacking in detail damage, which Codebook grants.
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus (later, at s20, you may encounter spd problems when using it, but for now it's strictly better).
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Bond > Relic + Codebook`, assuming you have the damage to support bond being better than relic.

**Accessories**

Nothing changes!

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+20) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+20) [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy) - DP book  | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [Level 95 Wild Howl](https://www.aurakingdom-db.com/item/20228-ladias-alchemy):
  - If you do not have the crit damage to overcap your crit damage by at least 50%, wild howl is still likely better for you to *use*. However, this is typically not an excuse to not build agni's. You can continue using this, but build agni's on the side.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

At s10, you are once again given the choice of orange Holy Spirits. If you have an s5 holy spirit, you can skip strictly the orange step, but may want to consider making a gold s15 holy spirit and thus must prepare by making the orange. 

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20) [S10 Scorching Rainforest](https://www.aurakingdom-db.com/item/23748-scorching-rainforest) | (+30) [S5 Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) |
| N/A | (+20) [S10 Netherworld Jade](https://www.aurakingdom-db.com/item/23749-netherworld-jade) | (+30) [S10 Scorching Rainforest](https://www.aurakingdom-db.com/item/23748-scorching-rainforest) |

- [Scorching Rainforest](https://www.aurakingdom-db.com/item/23748-scorching-rainforest)
  - This is the go to upgrade for those who don't have insane amounts of crit damage thanks to archive. This grants a flat def shred (very helpful considering the 50% percent debuff cap) and 5% damage received.
  - The upgrade at s15, later on, strictly just improves the base proc of the holy spirit. 
  - Because of how dmg received calculations work, this tends to be better than Netherworld Jade at orange
- [Netherworld Jade](https://www.aurakingdom-db.com/item/23749-netherworld-jade)
  - The main feature of this holy spirit is it's ability to raise max cdmg. At orange, it only provides a 10% max cdmg increase. This is largely insignificant at the moment, but the upgrade allows +30% max cdmg at +30. For extremely strong players, this will make this ever so slightly better after s15.
- [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver)
  - The "pay to win" item in the Holy Spirit slot. Depending on what pen/ele%/d-dmg stats you have, this can be better even than the p2w God holy spirits unlocked at s15, due to the triple shot proc.
  - Most players acquiring p2w items will be at a very high level of progression in archive, and consequently should prefer this over the element God spirits. 
  - Provides 10% triple strike chance (!!), some pen, some mspd, a 20% def shred proc, and 20% ele skill dmg proc.

### Consumables

**Food:**
- [Oriental Beauty Steamed Milk](https://www.aurakingdom-db.com/item/21048-oriental-beauty-steamed-milk) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Almond and Walnut Cinnamon Roll](https://www.aurakingdom-db.com/item/21849-almond-and-walnut-cinnamon-roll) provides 15% triple strike

**Drink:** 
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# Level S15-S19

**Summary:** Optional upgrade to weapon. Darkflame accessory set becomes available, but is inferior to Agni's in most cases. s15 holy spirits unlocked, and most else remains the same.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S15 Gold - DP book | (+25~30) S15 Gold - DP book | (+30) S10 Evil God Weapon - Blacksmithing |
| N/A | (+25~30) S10 Evil God Weapon - Blacksmithing | (+30) S15 Gold - DP book |
| N/A | SUB: (+20) S10 Nocturnal Evil God - Blacksmithing | SUB: (+30) S10 Nocturnal Evil God - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

The s15 weapon is unlocked. Upgrade if you have an s5 weapon and want to do more damage! Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. | (+20~30) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. | (+30) [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - Blacksmithing, also known as Evil Conqueror set. |
| N/A | (+20~30) [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - VOE, also known as Eternia Set | N/A |

- [S10 Evil Aura](https://www.aurakingdom-db.com/item/20899-evil-conqueror-helmet) - At this point, this becomes a little expensive just to craft. Make sure you are getting a core that is at least half decent. Ensure that the armor is dark core if possible to take advantage of the elemental reduction.
  - Provides 15% detail damage, 35% crit damage to bosses. It is strictly better than s5 eternia, and the only reason why you'd stick with eternia is if you wanted to be a little cheap about gear upgrades. 
  - Both Guardian Knight and Ninja sets (the other orange sets) are not strictly offensive, with Ninja providing p-heal and Guardian Knight being a defensive set. Thus, this is clearly the best.
- [S5 Gazing Time](https://www.aurakingdom-db.com/item/19744-eternias-time-travel-hat) - This is a free set, which is super nice. Because you can exchange for tons of copies of this from VOE (which you should have been running), you can also easily get this to a very high star for free. Use LP to get each to 3 stars, then combine those.
  - Provides 10% dmg%, 10% damage dealt to all elements. 
  - Provides you the same amount of pen as s1 gear while being much cheaper
  - This upgrade loses you all of the cdmg from holy chant, along with 2% d-dmg, BUT: Allows you to use s1 enchant cards (eg more pen) and higher base stats. This makes it a compelling upgrade for those at s5 who need a minor power boost, while being almost completely free.
- [S15 Dazzling Fortune](https://www.aurakingdom-db.com/item/21959-book-of-destiny-ephemeral-cap) - Not really a good recommendation because it's not the best, but is still an ok upgrade. Free set from VOE also, same idea as Gazing Time
  - All it provides is 10% damage dealt, and an 8% double strike chance. Granted, this is clearly not *terrible*, but s10 is better, and if you had s5 then there's not much point to upgrading other than the pen.
  - The main thing is that you don't get 10% dmg from this. Zeal is nice, but 10% damage is strictly better and much more consistent (and can actually factor into zeal *multipliers*)
  - Comes with 2% more pen (1% from each gear item's enchant card)

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. | (+20~30) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. | (+30) [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set. |

- [S10 Grand Aura](https://www.aurakingdom-db.com/item/20903-evil-conqueror-belt-armor) - Blacksmithing, also known as Evil Conqueror set.
  - 12% detail damage and a proc for 15% crit rate to bosses, 15% crit damage to bosses.
  - This set is better than Guardian Knight (clearly) due to that set being defensive. It's also strictly better than Ninja, which also provides detail damage and crit rate, but less of both and no crit damage.
- [S15 Night's Fortune Set](https://www.aurakingdom-db.com/item/21963-book-of-destiny-belt-of-travel) - Free from VOE
  - A pretty weak set. It provides 10% crit rate, 10% movespeed (!!), and procs that provide up to 10% detail damage.
  - This is just strictly worse than s10 in every way (less d-dmg, less crit rate, lacking cdmg). Most players will argue that this isn't even an option worth considering. HOWEVER, consider: zoom and/or free. If you're leeching or questing your way to s20, the movespeed is funny, *and* it doesn't cost anything, right? smile


**Trophy**

There are no gold s15 trophies that are better than the previously mentioned cultural relic/codebook combo.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook) | (+20) [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| (+20) [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain) | (+20) [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. Keep working on +30ing it. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S10 Godly - Restored Codebook](https://www.aurakingdom-db.com/item/21380-godly-restored-codebook)
  - Grants a good amount of raw stats, but more importantly has a 15% proc for 10% boss damage. At this stage of the game your detail damage becomes important as your crit damage slowly becomes diminishing returns.
  - +30 this if you intend to keep it past s20, and +20 it otherwise.
  - Use as the 2nd trophy in a pair with cultural relic. 
- [S10 Wiccan Ritual - Pearl Chain](https://www.aurakingdom-db.com/item/21378-wiccan-ritual-pearl-chain)
  - A decent cdmg crafted trophy. +20 it. Use if you don't use Bond and have some money.
  - Essentially just grants 50% crit damage and some crit rate. Assuming you have 400% or less crit damage (make sure you're calculating crit damage correctly, not just looking at the profile stats) or higher, 50% *may* be worth it compared to Codebook. However:
  - Most players with archive will have so much crit damage that they're capped anyway. Also, you will get more cdmg in the future. For this reason, if you have 400% or more cdmg, you are getting capped over agni's and it's not worth it. Also, you are likely lacking in detail damage, which Codebook grants.
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus (later, at s20, you may encounter spd problems when using it, but for now it's strictly better).
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Bond > Relic + Codebook`, assuming you have the damage to support bond being better than relic.

**Accessories**

Battle Soul (aka Darkflame set) appears!

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+30) [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul) - DP book, commonly known as Darkflame Set | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - At this point you should be +30ing Agni's, given how long you've had it.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul):
  - The newly unlocked s15 set provides a weaker agni proc. 
  - 6% chance to increase cdmg cap by 60%, dmg to all targets by 20%.
  - While the 20% dmg dealt multiplier is great, the loss of 90% cdmg cap is crippling compared to agni's assuming you fulfill all of your crit damage cap. On both a theory and practical tests, this loses to agni's in almost every single situation.
  - Because Agni's is +30'd at this point, Battle Soul must also be +30 to be viable in return
  - This *does* have a use case! If you are running f7-f9 of VOE, or any of the other rare instances where there is a crit damage nerf, it's possible for your crit damage to be nerfed hard enough that you don't *need* the extra 90% crit damage cap, and thus Battle Soul becomes strictly better. 
  - However, this use case is incredibly rare! It's hard to find a crit damage nerf instance. Because they exist (and one of those cases is the most run instance in the game LOL), however, if you are very strong you should consider building both agni's and darkflame if you don't have abyss.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

Oh boy.

If you are a high end player, s15 becomes crazy for you. To everyone else, just upgrade your orange to gold.

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20~30) [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest) | (+30) P2W HS (see below) |
| N/A | (+20~30) [S15 Dark Netherworld Jade](https://www.aurakingdom-db.com/item/22677-dark-netherworld-jade) | (+30) [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest) |

- [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest)
  - Stronger 3k of def shred, 8% dmg received
  - Remember when I said the upgrade strictly just improves the base proc of the holy spirit? Yeah it's just that, more def shred and dmg received. The +30 proc is very nice, but it's up to you if you want to do that in an equip slot that's replaced so often
- [S15 Dark Netherworld Jade](https://www.aurakingdom-db.com/item/22677-dark-netherworld-jade)
  - A 30% cdmg cap HS at +30. Good for those with a ton of cdmg and a lot of dmg received (eg very strong players) but for mid end players sizzling rainforest is always better probably.
- A comparison of the p2w holy spirits
  at +30, assuming you have all the prerequisites to fulfill procs (eg having manual). During calculations I assumed you have max archive or close to it, so pen is irrelevant
  - [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) provides 5% mspd, 5% dmg, much lower raw stats, 10% triple shot, 3% pen, 7% proc for 20% def shred, 7% proc for 20% skill damage
  - [Angel's Arrival](https://www.aurakingdom-db.com/item/22694-angels-arrival) provides 10% cdmg cap, 7% pen, a 10% proc for 5% cdmg/5% dmg, 10 armor piercing. It's other procs are healing/def related (so if you're a tank build this is better, but this is a dps guide). This is objectively worse than:
  - [Heart of Ruthless Hunting](https://www.aurakingdom-db.com/item/22991-heart-of-ruthless-hunting) provides 40% cdmg cap, 10% cdmg, 5% pen, 10% proc for 10% cdmg, 10% almighty, 5% proc for 20% received cdmg, and more procs that amount to up to 10+50% cdmg, 10+50% cdmg cap extra. **This is currently inaccessible though!**
  - [Elemental God Soul Crystals](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Btype_id_eq%5D=1042&q%5Bquality_eq%5D=6&q%5Bmin_lvl_gteq%5D=115&q%5Bmin_lvl_lteq%5D=115) provide 15% main weapon damage, 10% d-dmg, a 10% proc for 5% ele skill dmg% stacking twice, and ele cdmg%, 5% elemental dmg, 1500 almighty, 10% pen
  - First, it's clear that Angel's Arrival is strictly worse than Heart of Ruthless Hunting. Kurt's Revolver actually continues to hold it's own because of it's triple shot and 20% skill damage chance. 
  - Which of Kurt's Revolver, Ruthless Hunting, and God Soul Crystals is best for you depends heavily on *which* archive you have, what class you are playing, due to how thin the margins are. For instance, if your class is built to stack zeals and you have significant skill damage, Ruthless Hunting becomes the best. If you are lacking elemental damage or primary % and have a fusion book, God Soul becomes the best. If you are overloaded on raw stats and have no zeal or skill dmg, Kurt's Revolver is best.
  - In general, `Ruthless Hunting > God Soul with fusion book > Kurt's Revolver > God Soul` assuming you have max archive, fusion book and you can crit (eg ruthless hunter isn't completely useless). However, I really don't want to say one is better than the others. It's so context specific that any one of the 3 is viable.

### Consumables

**Food:**
- [Oriental Beauty Steamed Milk](https://www.aurakingdom-db.com/item/21048-oriental-beauty-steamed-milk) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Almond and Walnut Cinnamon Roll](https://www.aurakingdom-db.com/item/21849-almond-and-walnut-cinnamon-roll) provides 15% triple strike

**Drink:** 
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# Level S20-S24

**Summary:** Armor upgrades, and the book of destruction are available. Nothing changes for most things.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S15 Gold - DP book | (+30) S15 Gold - DP book | (+30) S20 Sinful Weapon - Blacksmithing |
| N/A | (+30) S20 Sinful Weapon - Blacksmithing | (+30) S15 Gold - DP book |
| N/A | SUB: (+20) S20 Nocturnal Sinful - Blacksmithing | SUB: (+30) S20 Nocturnal Sinful - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

We now have s20 weapons! Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. | (+20~30) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. | (+30) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. |
| N/A | N/A | (+30) [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - Blacksmithing, also known as Darklight set. |

- [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - hoo boy. Now crafting is getting a good bit expensive. Ensure your core is good!
  - Provides 17% dmg, 40% cdmg to bosses. I mean, not much more to say other than "it's the dps orange set". 
  - At this stage in the game, armor becomes monotonous because there's really only 1 decent choice. Gold armor is largely irrelevant, and there's only 1 good dps orange armor set.
  - A defense against Darklight, the other dps set: Darklight is rarely useful, except in niche cases where it becomes the only viable option. The idea is that boss damage and raw dmg is immediately applicable to most situations, but (especially for high archive players where cdmg is diminishing returns) crit rate is highly important in specific contexts
- [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - This set will only be used by extremely high level players in high level content. Thus, you should be using the best *stat* cores (dmg% + hp/def/eva%) because QOL rarely matters in the contexts you use this in
  - Provides 14% d-dmg, 25% crit rate to bosses. 
  - Many high level instances, at this point, are characterized by crippling d-dmg and crit stat nerfs. Crit damage doesn't matter when you can't crit, and dmg% doesn't matter if your raw dmg stat is 0. Thus, this set, which leverages a non standard crit calculation stat, is optimal even at s30 because of the guaranteed 25% crit chance even when your crit stat is nerfed to 0.
  - In theory, because of the "reset" of diminishing returns, Dark Frenzy can be considerably better than every other set at s20 *depending on the instance nerf*.
- [S15 Dazzling Fortune](https://www.aurakingdom-db.com/item/21959-book-of-destiny-ephemeral-cap) - Not really a good recommendation because it's not the best, but is still an ok upgrade. Free set from VOE also, same idea as Gazing Time
  - All it provides is 10% damage dealt, and an 8% double strike chance. Granted, this is clearly not *terrible*, but s10 is better, and if you had s5 then there's not much point to upgrading other than the pen.
  - The main thing is that you don't get 10% dmg from this. Zeal is nice, but 10% damage is strictly better and much more consistent (and can actually factor into zeal *multipliers*)
  - Worse than s20 in every way ;-;

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. | (+20~30) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. | (+30) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. |

- [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set.
  - 14% d-dmg, 40% cdmg to bosses.
  - It's really not close, no other set is better. Darklight has no niche use here because it only gives cr to elites. 
- [S15 Night's Fortune Set](https://www.aurakingdom-db.com/item/21963-book-of-destiny-belt-of-travel) - Free from VOE
  - A pretty weak set. It provides 10% crit rate, 10% movespeed (!!), and procs that provide up to 10% detail damage.
  - This is just strictly worse than s10 in every way (less d-dmg, less crit rate, lacking cdmg). Most players will argue that this isn't even an option worth considering. HOWEVER, consider: zoom and/or free. If you're leeching or questing your way to s20, the movespeed is funny, *and* it doesn't cost anything, right? smile


**Trophy**

s20 orange pog

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| N/A | N/A | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. If this isn't +30 after 25 levels of having it you're probably doing something wrong. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) - crafted
  - 25% cdmg to bosses, oodles of speed, and a 20% chance to cause double zeal. 
  - It's actually really not close here. The only other dps set is the Purified Magic Ring, which gives 5% d-dmg to boss monsters, and a fairly powerful (3.6k) def shred. While this is cool, the def shred is not good enough to overcome Book of Destruction's zeal proc + spd in any serious manner.
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus.
  - Compared to book here, bond loses you a ton of spd, which may result in you being undercapped on spd in dungeons. Depending on which class you are, this can absolutely screw up your rotations.
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Relic + Book = Bond`.

**Accessories**

Surprise, nothing changes

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+30) [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul) - DP book, commonly known as Darkflame Set | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - At this point you should be +30ing Agni's, given how long you've had it.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul):
  - The s15 set provides a weaker agni proc. 
  - 6% chance to increase cdmg cap by 60%, dmg to all targets by 20%.
  - While the 20% dmg dealt multiplier is great, the loss of 90% cdmg cap is crippling compared to agni's assuming you fulfill all of your crit damage cap. On both a theory and practical tests, this loses to agni's in almost every single situation.
  - Because Agni's is +30'd at this point, Battle Soul must also be +30 to be viable in return
  - This *does* have a use case! If you are running f7-f9 of VOE, or any of the other rare instances where there is a crit damage nerf, it's possible for your crit damage to be nerfed hard enough that you don't *need* the extra 90% crit damage cap, and thus Battle Soul becomes strictly better. 
  - However, this use case is incredibly rare! It's hard to find a crit damage nerf instance. Because they exist (and one of those cases is the most run instance in the game LOL), however, if you are very strong you should consider building both agni's and darkflame if you don't have abyss.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones (most of the time, at s20 some niche use cases may want Darkthunder!)
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

New orange unlocks, but they're kinda bad, so this is the first time the BIS is the one from last level tier for holy spirits!

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20~30) [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest) | (+30) P2W HS (see below) |
| N/A | (+20~30) [S20 Demon Drill of Darkness](https://www.aurakingdom-db.com/item/22681-demon-drill-of-darkness) | (+30) [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest) |

- [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest)
  - 3k of def shred, 8% dmg received
- [S20 Demon Drill of Darkness](https://www.aurakingdom-db.com/item/22681-demon-drill-of-darkness)
  - Seems weird because this is a defensive HS, right? 
  - While it is true that the [Holy Fruit in Eden](https://www.aurakingdom-db.com/item/22683-holy-fruit-in-eden) and [Piercing Cold Lotus](https://www.aurakingdom-db.com/item/22680-piercing-cold-lotus) are the dps options, Demon Drill of Darkness is so good after the upgrade at s25, and the HS are expensive enough, that I don't think it's worth recommending anything else here. 
  - My suggestion is to keep using your s15 HS and skip to s25.
- A comparison of the p2w holy spirits at +30, assuming you have all the prerequisites to fulfill procs (eg having manual). During calculations I assumed you have max archive or close to it, so pen is irrelevant
  - [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) provides 5% mspd, 5% dmg, much lower raw stats, 10% triple shot, 3% pen, 7% proc for 20% def shred, 7% proc for 20% skill damage
  - [Angel's Arrival](https://www.aurakingdom-db.com/item/22694-angels-arrival) provides 10% cdmg cap, 7% pen, a 10% proc for 5% cdmg/5% dmg, 10 armor piercing. It's other procs are healing/def related (so if you're a tank build this is better, but this is a dps guide). This is objectively worse than:
  - [Heart of Ruthless Hunting](https://www.aurakingdom-db.com/item/22991-heart-of-ruthless-hunting) provides 40% cdmg cap, 10% cdmg, 5% pen, 10% proc for 10% cdmg, 10% almighty, 5% proc for 20% received cdmg, and more procs that amount to up to 10+50% cdmg, 10+50% cdmg cap extra. **This is currently inaccessible though!**
  - [Elemental God Soul Crystals](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Btype_id_eq%5D=1042&q%5Bquality_eq%5D=6&q%5Bmin_lvl_gteq%5D=115&q%5Bmin_lvl_lteq%5D=115) provide 15% main weapon damage, 10% d-dmg, a 10% proc for 5% ele skill dmg% stacking twice, and ele cdmg%, 5% elemental dmg, 1500 almighty, 10% pen
  - First, it's clear that Angel's Arrival is strictly worse than Heart of Ruthless Hunting. Kurt's Revolver actually continues to hold it's own because of it's triple shot and 20% skill damage chance. 
  - Which of Kurt's Revolver, Ruthless Hunting, and God Soul Crystals is best for you depends heavily on *which* archive you have, what class you are playing, due to how thin the margins are. For instance, if your class is built to stack zeals and you have significant skill damage, Ruthless Hunting becomes the best. If you are lacking elemental damage or primary % and have a fusion book, God Soul becomes the best. If you are overloaded on raw stats and have no zeal or skill dmg, Kurt's Revolver is best.
  - In general, `Ruthless Hunting > God Soul with fusion book > Kurt's Revolver > God Soul` assuming you have max archive, fusion book and you can crit (eg ruthless hunter isn't completely useless). However, I really don't want to say one is better than the others. It's so context specific that any one of the 3 is viable.

### Consumables

**Food:**
- [Salted Sakura Stuffed Mochi](https://www.aurakingdom-db.com/item/22893-salted-sakura-stuffed-mochi) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Sakura Honey Lava Cheese](https://www.aurakingdom-db.com/item/22897-sakura-honey-lava-cheese) provides 15% triple strike
- [Almond and Walnut Cinnamon Roll](https://www.aurakingdom-db.com/item/21849-almond-and-walnut-cinnamon-roll) provides 15% triple strike

**Drink:** 
- [Herbal Peppermint Sparkling Water](https://www.aurakingdom-db.com/item/22881-herbal-peppermint-sparkling-water) provides 15% mspd, 7% crit rate
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# Level S25-S29

**Summary:** The MOST useless level set so far with very few swaps (only to weapons, and HS). I hope you made really good s20 gear!

### Gear

The most significant part of this level set is the s25 gold weapon becoming available. Really.

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S25 Gold - DP book | (+30) S25 Gold - DP book | (+30) S20 Sinful Weapon - Blacksmithing |
| N/A | (+30) S20 Sinful Weapon - Blacksmithing | (+30) S25 Gold - DP book |
| N/A | SUB: (+20) S20 Nocturnal Sinful - Blacksmithing | SUB: (+30) S20 Nocturnal Sinful - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

We now have s25 weapons! Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. | (+20~30) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. | (+30) [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - Blacksmithing, also known as Holy Feathered set. |
| N/A | N/A | (+30) [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - Blacksmithing, also known as Darklight set. |

- [S20 Glorious Feathers](https://www.aurakingdom-db.com/item/22318-glorious-holy-feathered-helmet) - hoo boy. Now crafting is getting a good bit expensive. Ensure your core is good!
  - Provides 17% dmg, 40% cdmg to bosses. I mean, not much more to say other than "it's the dps orange set". 
  - At this stage in the game, armor becomes monotonous because there's really only 1 decent choice. Gold armor is largely irrelevant, and there's only 1 good dps orange armor set.
  - A defense against Darklight, the other dps set: Darklight is rarely useful, except in niche cases where it becomes the only viable option. The idea is that boss damage and raw dmg is immediately applicable to most situations, but (especially for high archive players where cdmg is diminishing returns) crit rate is highly important in specific contexts
- [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - This set will only be used by extremely high level players in high level content. Thus, you should be using the best *stat* cores (dmg% + hp/def/eva%) because QOL rarely matters in the contexts you use this in
  - Provides 14% d-dmg, 25% crit rate to bosses. 
  - Many high level instances, at this point, are characterized by crippling d-dmg and crit stat nerfs. Crit damage doesn't matter when you can't crit, and dmg% doesn't matter if your raw dmg stat is 0. Thus, this set, which leverages a non standard crit calculation stat, is optimal even at s30 because of the guaranteed 25% crit chance even when your crit stat is nerfed to 0.
  - In theory, because of the "reset" of diminishing returns, Dark Frenzy can be considerably better than every other set at s20 *depending on the instance nerf*.
- [S25 Shattering Creation](https://www.aurakingdom-db.com/item/22961-world-creationhat-of-passage) - Free from VOE
  - 10% dmg dealt, 8% chance of 50% dmg on next attack, and raising the crit cap. 
  - Worse than s20 in every way!!

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. | (+20~30) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. | (+30) [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set. |

- [S20 Splendid Feathers](https://www.aurakingdom-db.com/item/22322-glorious-holy-feathered-belt) - Blacksmithing, also known as Holy Feathered set.
  - 14% d-dmg, 40% cdmg to bosses.
  - It's really not close, no other set is better. Darklight has no niche use here because it only gives cr to elites. 
- [S25 Sky-Raiding Genesis Set](https://www.aurakingdom-db.com/item/22965-world-creationeternal-waistband) - Free from VOE
  - 10% crit rate, 20% crit damage, with stacks for dmg dealt. This is better than the s15 set was, and is not ultra shite if you really need the % crit rate stat, given that it's free.
  - However, in most situations, worse than s20 in every way.


**Trophy**

Euronyme's Promise is the only non crappy trophy unlocked.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| N/A | New s25 gold (context dependent) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- Let's go through the new s25 golds
  - [Kilauea's Molten Core](https://www.aurakingdom-db.com/item/32801-kilaueas-molten-core) - 8% crit rate, def shred. This is useful if you want the guaranteed crit rate beacuse you're running a dungeon where your crit is 0. Optimally pairs with the crit rate s30 bottoms, s20 tops, & other crit rate enhancing.
  - [Euronyme's Promise](https://www.aurakingdom-db.com/item/32799-euronymes-promise) - 25% crit dmg, 5% proc to get 4% dmg, 10% dark dmg, stacks up to 3 times. Useful if and only if you're a dark class. This is only better than book if you need the dark dmg bc the cdmg is the same.
  - The other 4 are defensive in nature.
- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. If this isn't +30 after 25 levels of having it you're probably doing something wrong. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) - crafted
  - 25% cdmg to bosses, oodles of speed, and a 20% chance to cause double zeal. 
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus.
  - Compared to book here, bond loses you a ton of spd, which may result in you being undercapped on spd in dungeons. Depending on which class you are, this can absolutely screw up your rotations.
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Relic + Book = Bond`.

**Accessories**

Surprise, nothing changes

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+30) [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul) - DP book, commonly known as Darkflame Set | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- Why the s25 sets suck:
  - [Will Seed](https://www.aurakingdom-db.com/item/33853-will-seeds-ego-impulsive) is worse than agni's because you lose the 150% cap. It gives cdr and not much else
  - [Asura's Power](https://www.aurakingdom-db.com/item/33279-tasmidors-corrupted-mind) aka Tasmidor's is worse than agni's because 15% dmg dealt is worse than 380 -> over 500 cdmg (that's a lot more than 15%)
  - [Dark Soul Sky Break](https://www.aurakingdom-db.com/item/22979-void-claw-of-black-eroding-specter) gives 10% skill dmg, 50% cdmg. Where's the cap to put that cdmg into? 
  - The other sets are defensive.
- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - At this point you should be +30ing Agni's, given how long you've had it.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul):
  - The s15 set provides a weaker agni proc. 
  - 6% chance to increase cdmg cap by 60%, dmg to all targets by 20%.
  - While the 20% dmg dealt multiplier is great, the loss of 90% cdmg cap is crippling compared to agni's assuming you fulfill all of your crit damage cap. On both a theory and practical tests, this loses to agni's in almost every single situation.
  - Because Agni's is +30'd at this point, Battle Soul must also be +30 to be viable in return
  - This *does* have a use case! If you are running f7-f9 of VOE, or any of the other rare instances where there is a crit damage nerf, it's possible for your crit damage to be nerfed hard enough that you don't *need* the extra 90% crit damage cap, and thus Battle Soul becomes strictly better. 
  - However, this use case is incredibly rare! It's hard to find a crit damage nerf instance. Because they exist (and one of those cases is the most run instance in the game LOL), however, if you are very strong you should consider building both agni's and darkflame if you don't have abyss.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones (most of the time, at s20 some niche use cases may want Darkthunder!)
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

The new s25 crimson shadow drill of darkness!

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20~30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) | (+30) P2W HS (see below) |
| N/A | (+20~30) Ele specific HS (see below) | (+30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) |

- [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness)
  - Besides the minor amount of pen, this gives a massive defensive debuff, along with 8% crit rate to you and 10% cdmg cap (stacking up to 3 times at +30).
  - The devil is in the details (aka the fortification buffs) here! 
  - The other s25 options are not as universal For instance [Golden Emperors Holy Fruit in Eden](https://www.aurakingdom-db.com/item/23139-golden-emperors-holy-fruit-in-eden) turns defensive.
- [S25 Purple Frost Piercing Cold Lotus](https://www.aurakingdom-db.com/item/23136-purple-frost-piercing-cold-lotus)
  - 10% phys dmg proc, but once again the devil is in the details. Tons of ice damage, works just like sizzling rainforest!
  - **Because of how it procs ice skill dmg, this is comparable if not better than Demon Drill of Darkness if you are an ice class!**
- [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest)
  - 3k of def shred, 8% dmg received
  - **Because of how it procs flame skill dmg, this is comparable if not better than Demon Drill of Darkness if you are a flame class!**
- A comparison of the p2w holy spirits at +30, assuming you have all the prerequisites to fulfill procs (eg having manual). During calculations I assumed you have max archive or close to it, so pen is irrelevant
  - [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) provides 5% mspd, 5% dmg, much lower raw stats, 10% triple shot, 3% pen, 7% proc for 20% def shred, 7% proc for 20% skill damage
  - [Angel's Arrival](https://www.aurakingdom-db.com/item/22694-angels-arrival) provides 10% cdmg cap, 7% pen, a 10% proc for 5% cdmg/5% dmg, 10 armor piercing. It's other procs are healing/def related (so if you're a tank build this is better, but this is a dps guide). This is objectively worse than:
  - [Heart of Ruthless Hunting](https://www.aurakingdom-db.com/item/22991-heart-of-ruthless-hunting) provides 40% cdmg cap, 10% cdmg, 5% pen, 10% proc for 10% cdmg, 10% almighty, 5% proc for 20% received cdmg, and more procs that amount to up to 10+50% cdmg, 10+50% cdmg cap extra. **This is currently inaccessible though!**
  - [Elemental God Soul Crystals](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Btype_id_eq%5D=1042&q%5Bquality_eq%5D=6&q%5Bmin_lvl_gteq%5D=115&q%5Bmin_lvl_lteq%5D=115) provide 15% main weapon damage, 10% d-dmg, a 10% proc for 5% ele skill dmg% stacking twice, and ele cdmg%, 5% elemental dmg, 1500 almighty, 10% pen
  - First, it's clear that Angel's Arrival is strictly worse than Heart of Ruthless Hunting. Kurt's Revolver actually continues to hold it's own because of it's triple shot and 20% skill damage chance. 
  - Which of Kurt's Revolver, Ruthless Hunting, and God Soul Crystals is best for you depends heavily on *which* archive you have, what class you are playing, due to how thin the margins are. For instance, if your class is built to stack zeals and you have significant skill damage, Ruthless Hunting becomes the best. If you are lacking elemental damage or primary % and have a fusion book, God Soul becomes the best. If you are overloaded on raw stats and have no zeal or skill dmg, Kurt's Revolver is best.
  - In general, `Ruthless Hunting > God Soul with fusion book > Kurt's Revolver > God Soul` assuming you have max archive, fusion book and you can crit (eg ruthless hunter isn't completely useless). However, I really don't want to say one is better than the others. It's so context specific that any one of the 3 is viable.

### Consumables

**Food:**
- [Thick Cheese Star Order Pizza](https://www.aurakingdom-db.com/item/35042-thick-cheese-star-order-pizza) provides 15% mspd and -15% crit damage received. Pairing this with Demon Drill can make you basically immortal lol
- [Double Delight Star Flower Grilled Beef Burger](https://www.aurakingdom-db.com/item/35046-double-delight-star-flower-grilled-beef-burger) provides 15% d-dmg
- [Salted Sakura Stuffed Mochi](https://www.aurakingdom-db.com/item/22893-salted-sakura-stuffed-mochi) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Sakura Honey Lava Cheese](https://www.aurakingdom-db.com/item/22897-sakura-honey-lava-cheese) provides 15% triple strike
- [Almond and Walnut Cinnamon Roll](https://www.aurakingdom-db.com/item/21849-almond-and-walnut-cinnamon-roll) provides 15% triple strike

**Drink:** 
- [Forgotten Age Fantasy Whiskey](https://www.aurakingdom-db.com/item/35030-forgotten-age-fantasy-whiskey) provides 15% triple strike
- [Herbal Peppermint Sparkling Water](https://www.aurakingdom-db.com/item/22881-herbal-peppermint-sparkling-water) provides 15% mspd, 7% crit rate
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# Level S30-S34

**Summary:** Some minor changes, especially to armor as a new orange set is unlocked.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S25 Gold - DP book | (+30) S25 Gold - DP book | (+30) S30 Ultimate Weapon - Blacksmithing |
| N/A | (+30) S30 Ultimate Weapon - Blacksmithing | (+30) S25 Gold - DP book |
| N/A | SUB: (+20) S30 Nocturnal Ultimate - Blacksmithing | SUB: (+30) S30 Nocturnal Ultimate - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

We now have s30 weapons! Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. | (+20~30) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. | (+30) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. |
| N/A | N/A | (+30) [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - Blacksmithing, also known as Darklight set. |

- [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Crafting is like 1k per piece now. I hope your wallet is ready.
  - Provides 19% d-dmg, some raw stats, 40% cdmg to bosses. I mean, not much more to say other than "it's the dps orange set". 
  - At this stage in the game, armor becomes monotonous because there's really only 1 decent choice. Gold armor is largely irrelevant, and there's only 1 good dps orange armor set.
  - Darklight continues to be useful in niche situations
- [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - This set will only be used by extremely high level players in high level content. Thus, you should be using the best *stat* cores (dmg% + hp/def/eva%) because QOL rarely matters in the contexts you use this in
  - Provides 14% d-dmg, 25% crit rate to bosses. 
  - Many high level instances, at this point, are characterized by crippling d-dmg and crit stat nerfs. Crit damage doesn't matter when you can't crit, and dmg% doesn't matter if your raw dmg stat is 0. Thus, this set, which leverages a non standard crit calculation stat, is optimal even at s30 because of the guaranteed 25% crit chance even when your crit stat is nerfed to 0.
  - In theory, because of the "reset" of diminishing returns, Dark Frenzy can be considerably better than every other set at s20 *depending on the instance nerf*.
- [S25 Shattering Creation](https://www.aurakingdom-db.com/item/22961-world-creationhat-of-passage) - Free from VOE
  - 10% dmg dealt, 8% chance of 50% dmg on next attack, and raising the crit cap. 
  - Worse than s20 in every way!!

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. | (+20~30) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. | (+30) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. |

- [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, once again I hope your wallet is ready
  - 16% dmg dealt, 40% cdmg to elites (huh?), and a proc for 20% cr and cdmg to bosses.
  - While s20 holy feathered does give more crit damage, the 20% crit damage shouldn't be too big of a deal for you at this point and the crit rate and d-dmg is more important.


**Trophy**

We unlock s30 trophies but are they really good?

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| N/A | s25 gold (see below) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- s30 unlocks:
  - [Necromancer - Facing the Void](https://www.aurakingdom-db.com/item/34191-necromancer-facing-the-void) is sometimes thrown around as an upgrade option. It grants 10% def shred and 4% dmg taken. While def shred does become really hard at this point, it turns out that most of the time 10% is not enough to be worth it. Book is still better
- s25 golds:
  - [Kilauea's Molten Core](https://www.aurakingdom-db.com/item/32801-kilaueas-molten-core) - 8% crit rate, def shred. This is useful if you want the guaranteed crit rate beacuse you're running a dungeon where your crit is 0. Optimally pairs with the crit rate s30 bottoms, s20 tops, & other crit rate enhancing.
  - [Euronyme's Promise](https://www.aurakingdom-db.com/item/32799-euronymes-promise) - 25% crit dmg, 5% proc to get 4% dmg, 10% dark dmg, stacks up to 3 times. Useful if and only if you're a dark class. This is only better than book if you need the dark dmg bc the cdmg is the same.
  - The other 4 are defensive in nature.
- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. If this isn't +30 after 25 levels of having it you're probably doing something wrong. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) - crafted
  - 25% cdmg to bosses, oodles of speed, and a 20% chance to cause double zeal. 
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus.
  - Compared to book here, bond loses you a ton of spd, which may result in you being undercapped on spd in dungeons. Depending on which class you are, this can absolutely screw up your rotations.
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Relic + Book = Bond`.

**Accessories**

Surprise, nothing changes. Orange sets have been useless the whole time and that isn't changing now.

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+30) [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul) - DP book, commonly known as Darkflame Set | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - At this point you should be +30ing Agni's, given how long you've had it.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul):
  - The s15 set provides a weaker agni proc. 
  - 6% chance to increase cdmg cap by 60%, dmg to all targets by 20%.
  - While the 20% dmg dealt multiplier is great, the loss of 90% cdmg cap is crippling compared to agni's assuming you fulfill all of your crit damage cap. On both a theory and practical tests, this loses to agni's in almost every single situation.
  - Because Agni's is +30'd at this point, Battle Soul must also be +30 to be viable in return
  - This *does* have a use case! If you are running f7-f9 of VOE, or any of the other rare instances where there is a crit damage nerf, it's possible for your crit damage to be nerfed hard enough that you don't *need* the extra 90% crit damage cap, and thus Battle Soul becomes strictly better. 
  - However, this use case is incredibly rare! It's hard to find a crit damage nerf instance. Because they exist (and one of those cases is the most run instance in the game LOL), however, if you are very strong you should consider building both agni's and darkflame if you don't have abyss.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones (most of the time, at s20 some niche use cases may want Darkthunder!)
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

New orange unlocks, but they're kinda bad v2

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20~30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) | (+30) P2W HS (see below) |
| N/A | (+20~30) Ele specific HS (see below) | (+30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) |

- the new orange unlocks:
  - [Eyes of the Brilliant Light](https://www.aurakingdom-db.com/item/23189-eyes-of-the-brilliant-light) gives 15% cdmg cap and 10% cdmg, and is just worse than drill of darkness
  - [War Rune Spirit Bead](https://www.aurakingdom-db.com/item/23188-war-rune-spirit-bead) most importantly gives 7% d-dmg and 7% d-dmg cap, but this is not useful because hitting the d-dmg cap is a myth.
- [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness)
  - Besides the minor amount of pen, this gives a massive defensive debuff, along with 8% crit rate to you and 10% cdmg cap (stacking up to 3 times at +30).
  - The devil is in the details (aka the fortification buffs) here! 
  - The other s25 options are not as universal For instance [Golden Emperors Holy Fruit in Eden](https://www.aurakingdom-db.com/item/23139-golden-emperors-holy-fruit-in-eden) turns defensive.
- [S25 Purple Frost Piercing Cold Lotus](https://www.aurakingdom-db.com/item/23136-purple-frost-piercing-cold-lotus)
  - 10% phys dmg proc, but once again the devil is in the details. Tons of ice damage, works just like sizzling rainforest!
  - **Because of how it procs ice skill dmg, this is comparable if not better than Demon Drill of Darkness if you are an ice class!**
- [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest)
  - 3k of def shred, 8% dmg received
  - **Because of how it procs flame skill dmg, this is comparable if not better than Demon Drill of Darkness if you are a flame class!**
- A comparison of the p2w holy spirits at +30, assuming you have all the prerequisites to fulfill procs (eg having manual). During calculations I assumed you have max archive or close to it, so pen is irrelevant
  - [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) provides 5% mspd, 5% dmg, much lower raw stats, 10% triple shot, 3% pen, 7% proc for 20% def shred, 7% proc for 20% skill damage
  - [Angel's Arrival](https://www.aurakingdom-db.com/item/22694-angels-arrival) provides 10% cdmg cap, 7% pen, a 10% proc for 5% cdmg/5% dmg, 10 armor piercing. It's other procs are healing/def related (so if you're a tank build this is better, but this is a dps guide). This is objectively worse than:
  - [Heart of Ruthless Hunting](https://www.aurakingdom-db.com/item/22991-heart-of-ruthless-hunting) provides 40% cdmg cap, 10% cdmg, 5% pen, 10% proc for 10% cdmg, 10% almighty, 5% proc for 20% received cdmg, and more procs that amount to up to 10+50% cdmg, 10+50% cdmg cap extra. **This is currently inaccessible though!**
  - [Elemental God Soul Crystals](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Btype_id_eq%5D=1042&q%5Bquality_eq%5D=6&q%5Bmin_lvl_gteq%5D=115&q%5Bmin_lvl_lteq%5D=115) provide 15% main weapon damage, 10% d-dmg, a 10% proc for 5% ele skill dmg% stacking twice, and ele cdmg%, 5% elemental dmg, 1500 almighty, 10% pen
  - First, it's clear that Angel's Arrival is strictly worse than Heart of Ruthless Hunting. Kurt's Revolver actually continues to hold it's own because of it's triple shot and 20% skill damage chance. 
  - Which of Kurt's Revolver, Ruthless Hunting, and God Soul Crystals is best for you depends heavily on *which* archive you have, what class you are playing, due to how thin the margins are. For instance, if your class is built to stack zeals and you have significant skill damage, Ruthless Hunting becomes the best. If you are lacking elemental damage or primary % and have a fusion book, God Soul becomes the best. If you are overloaded on raw stats and have no zeal or skill dmg, Kurt's Revolver is best.
  - In general, `Ruthless Hunting > God Soul with fusion book > Kurt's Revolver > God Soul` assuming you have max archive, fusion book and you can crit (eg ruthless hunter isn't completely useless). However, I really don't want to say one is better than the others. It's so context specific that any one of the 3 is viable.

### Consumables

**Food:**
- [Thick Cheese Star Order Pizza](https://www.aurakingdom-db.com/item/35042-thick-cheese-star-order-pizza) provides 15% mspd and -15% crit damage received. Pairing this with Demon Drill can make you basically immortal lol
- [Double Delight Star Flower Grilled Beef Burger](https://www.aurakingdom-db.com/item/35046-double-delight-star-flower-grilled-beef-burger) provides 15% d-dmg
- [Salted Sakura Stuffed Mochi](https://www.aurakingdom-db.com/item/22893-salted-sakura-stuffed-mochi) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Sakura Honey Lava Cheese](https://www.aurakingdom-db.com/item/22897-sakura-honey-lava-cheese) provides 15% triple strike

**Drink:** 
- [Forgotten Age Fantasy Whiskey](https://www.aurakingdom-db.com/item/35030-forgotten-age-fantasy-whiskey) provides 15% triple strike
- [Herbal Peppermint Sparkling Water](https://www.aurakingdom-db.com/item/22881-herbal-peppermint-sparkling-water) provides 15% mspd, 7% crit rate
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# Level S35-S40

**Summary:** The current level cap as of writing. The only newly unlocked content at s35 compared to s30 is to do with trophies and gold weapons, so you can skip everything else if you've read the s30-34 bit.

### Gear

**Weapon**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) S35 Gold - DP book | (+30) S35 Gold - DP book | (+30) S30 Ultimate Weapon - Blacksmithing |
| N/A | (+30) S30 Ultimate Weapon - Blacksmithing | (+30) S35 Gold - DP book |
| N/A | SUB: (+20) S30 Nocturnal Ultimate - Blacksmithing | SUB: (+30) S30 Nocturnal Ultimate - Blacksmithing |

**Note:** Gold weapon bonuses are not consistent. Some gold weapons are not particularly good! Look carefully at the class specific weapon you have to decide if it's better than orange.

Weapons tend to be particularly important for pen, because they actually have a base pen value on top of the enchantment card. Given how long you will have this, it's almost certainly a good idea to have the highest level main weapon you can. Once again, Destroyer is the best main weapon core. 

Due to how core procs work, if you are using an orange main weapon, you can actually use a nocturnal main weapon and a destroyer sub core.

**Top Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. | (+20~30) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. | (+30) [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Blacksmithing, also known as Blue Oath set. |
| N/A | N/A | (+30) [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - Blacksmithing, also known as Darklight set. |

- [S30 Oath of Loyalty](https://www.aurakingdom-db.com/item/33940-blue-oath-journey-helmet) - Crafting is like 1k per piece now. I hope your wallet is ready.
  - Provides 19% d-dmg, some raw stats, 40% cdmg to bosses. I mean, not much more to say other than "it's the dps orange set". 
  - At this stage in the game, armor becomes monotonous because there's really only 1 decent choice. Gold armor is largely irrelevant, and there's only 1 good dps orange armor set.
  - Darklight continues to be useful in niche situations
- [S20 Dark Frenzy](https://www.aurakingdom-db.com/item/22328-darklight-helmet) - This set will only be used by extremely high level players in high level content. Thus, you should be using the best *stat* cores (dmg% + hp/def/eva%) because QOL rarely matters in the contexts you use this in
  - Provides 14% d-dmg, 25% crit rate to bosses. 
  - Many high level instances, at this point, are characterized by crippling d-dmg and crit stat nerfs. Crit damage doesn't matter when you can't crit, and dmg% doesn't matter if your raw dmg stat is 0. Thus, this set, which leverages a non standard crit calculation stat, is optimal even at s30 because of the guaranteed 25% crit chance even when your crit stat is nerfed to 0.
  - In theory, because of the "reset" of diminishing returns, Dark Frenzy can be considerably better than every other set at s20 *depending on the instance nerf*.
- [S25 Shattering Creation](https://www.aurakingdom-db.com/item/22961-world-creationhat-of-passage) - Free from VOE
  - 10% dmg dealt, 8% chance of 50% dmg on next attack, and raising the crit cap. 
  - Worse than s20 in every way!!

**Bottom Armor**

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| (+20) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. | (+20~30) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. | (+30) [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, also known as Blue Oath set. |

- [S30 Oath of Youthful Zeal](https://www.aurakingdom-db.com/item/33944-blue-oath-journey-waist-armor) - Blacksmithing, once again I hope your wallet is ready
  - 16% dmg dealt, 40% cdmg to elites (huh?), and a proc for 20% cr and cdmg to bosses.
  - While s20 holy feathered does give more crit damage, the 20% crit damage shouldn't be too big of a deal for you at this point and the crit rate and d-dmg is more important.


**Trophy**

We unlock s35 trophies but are they really good? Yes, but technicalities mean everything is situational and there's no clear BIS.

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| (+20) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) | (+30) [Time and Destiny Set (there's 2!)](https://www.aurakingdom-db.com/item/46851-time-and-years) | 
| (+20) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) | (+30) [Genki Skyforged Set (there's 2!)](https://www.aurakingdom-db.com/item/46462-secret-stone-of-divine-element-celestial-rune) |
| N/A | s25 or s35 gold (see below) | (+30) [Bond Set (there's 2!)](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) |

- s35 unlocks:
  - [Kazakh Soul Harvest](https://www.aurakingdom-db.com/item/34193-kazakh-soul-harvest) is really only good because it gives an *exorbitant* amount of crit. Like, 24k crit. It also gives a very small amount of cdmg cap and cdmg, which is at least not useless. This is useful in the niche situation where you need a lot of raw crit stat to overcome an instance nerf and you have no unnerfable crit rate % sets.
  - [Isar's Corrupted Mind](https://www.aurakingdom-db.com/item/34194-isars-corrupted-mind) gives a lot of raw dmg, 38% cdmg, and 10% dark dmg. This is frequently worse than book of destruction because of the loss of spd, and lack of crit dmg cap to use the extra cdmg. Also, only consider if you are a dark class.
  - [Elinor's Desperate Pulse](https://www.aurakingdom-db.com/item/34196-elinors-desperate-pulse) meme item because it gives almost 20k spd. Useless otherwise.
  - The rest are defensive.
- s25 golds:
  - [Kilauea's Molten Core](https://www.aurakingdom-db.com/item/32801-kilaueas-molten-core) - 8% crit rate, def shred. This is useful if you want the guaranteed crit rate beacuse you're running a dungeon where your crit is 0. Optimally pairs with the crit rate s30 bottoms, s20 tops, & other crit rate enhancing.
  - [Euronyme's Promise](https://www.aurakingdom-db.com/item/32799-euronymes-promise) - 25% crit dmg, 5% proc to get 4% dmg, 10% dark dmg, stacks up to 3 times. Useful if and only if you're a dark class. This is only better than book if you need the dark dmg bc the cdmg is the same.
  - The other 4 are defensive in nature.
- [Level 95 Cultural Relic](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Cultural+Relic&q%5Btype_id_eq%5D=1039) - philae, dp book
  - By far one of the best trophies in the game. If this isn't +30 after 25 levels of having it you're probably doing something wrong. This is better due to the 20% attribute damage, and is especially good if you are a dark class. Elemental damage can sometimes be hard to come by, and you need to keep it's scaling up to par with the other elements of the dps formula
- [S20 Book of Destruction](https://www.aurakingdom-db.com/item/32797-book-of-destruction) - crafted
  - 25% cdmg to bosses, oodles of speed, and a 20% chance to cause double zeal. 
- [Bond Trophies](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Bname_cont%5D=Bond&q%5Btype_id_eq%5D=1039)
  - A collection of trophies that are pretty decent, but are extremely expensive. Provides pen and armor piercing scaling stats. Most players will not afford this set.
  - Although bond is frequently seen as a pvp set, it is better than cultural relic + orange crafted due to it's high dmg dealt multiplier and additional d-dmg from set bonus.
  - Compared to book here, bond loses you a ton of spd, which may result in you being undercapped on spd in dungeons. Depending on which class you are, this can absolutely screw up your rotations.
  - There are multiple bond sets. The [Flower Sprite](https://www.aurakingdom-db.com/item/32880-bond-eternal-sorrow) set is likely the best set that's accessible, but the [Otherworld Link](https://www.aurakingdom-db.com/item/32888-bond-cyclone-link) set is theoretically not bad either. 
- P2W sets (Genki Skyforged Set, Time & Destiny Set)
  - Probably worth hundreds of thousands of gold. Clearly better but literally only use it if you're 1.) an alt 2.) rich as heck. I think that which one is better is technical and build specific, but generally Time & Destiny set should be better in most situations.

In general, `P2W > Relic + Book = Bond`.

**Accessories**

Surprise, nothing changes. No new unlocks

| Low End | Mid End | High End |
| ------- | ------- | -------- | 
| N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. | (+30) [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain) - ""holy crap"" |
| N/A |  (+30) [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul) - DP book, commonly known as Darkflame Set | (+30) [S5 Endless Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles) - aka Abyss set |
| N/A | N/A | (+30) [S5 Demonic Release](https://www.aurakingdom-db.com/item/20646-crown-of-agni) - DP book, EST, commonly known as Agni's Set. |

- [S5 Demonic Release (Agni's)](https://www.aurakingdom-db.com/item/20646-crown-of-agni): BY FAR the best vanilla set in the game. It can be exchanged for with 15k GDP and 25 sky tower sigils per piece (so 45k GDP and 75 sigils total)
  - Provides an 8% chance to give 150% cdmg cap.
  - At this point you should be +30ing Agni's, given how long you've had it.
  - This is *really important*. Players have a huge amount of crit damage sources, but typically only 300% base cdmg cap. You can get another 80-100 from various sources but >~400% cdmg cap is nowhere near enough to account for the 500+ that most players end up getting. Agni's is thus, for almost all high level players in almost all situations, essentially a 150% crit damage buff.
- [S15 Battle Soul](https://www.aurakingdom-db.com/item/21986-faiths-tusk-of-fighting-soul):
  - The s15 set provides a weaker agni proc. 
  - 6% chance to increase cdmg cap by 60%, dmg to all targets by 20%.
  - While the 20% dmg dealt multiplier is great, the loss of 90% cdmg cap is crippling compared to agni's assuming you fulfill all of your crit damage cap. On both a theory and practical tests, this loses to agni's in almost every single situation.
  - Because Agni's is +30'd at this point, Battle Soul must also be +30 to be viable in return
  - This *does* have a use case! If you are running f7-f9 of VOE, or any of the other rare instances where there is a crit damage nerf, it's possible for your crit damage to be nerfed hard enough that you don't *need* the extra 90% crit damage cap, and thus Battle Soul becomes strictly better. 
  - However, this use case is incredibly rare! It's hard to find a crit damage nerf instance. Because they exist (and one of those cases is the most run instance in the game LOL), however, if you are very strong you should consider building both agni's and darkflame if you don't have abyss.
- [S5 Heavenly Seal](https://www.aurakingdom-db.com/item/47015-path-of-inquiry-soul-chain): 
  - Putting this on here is unironically a joke because you actually need the Abyss set in order to get the Heavenly Seal set (and more!). It's strictly an upgrade to Abyss, but is literally impossible to get because you need a formula that's *also* para only.
  - Provides (if you include procs) 48% cdmg, 24% d-dmg, 20% mspd, 40 armor piercing, 20% pen, 20% attribute d-dmg, 30% total def shred, 150% cdmg cap, 30% skill d-dmg, 20% almighty nerf. 
- [S5 Abyss Set](https://www.aurakingdom-db.com/item/46790-abyss-soul-shackles)
  - An extremely powerful set that provides tons of base stats, pen/armor piercing/mspd, crit damage cap (and is consequently a strictly better upgrade than Agni's), tons of detail damage from/to elements, and 2 very powerful debuffs.
  - However, it's para only and are really expensive to get. There is demand for it but frequently no market.

**Mount**
- Use a Level 4 Elemental Dmg % mount (or whatever is highest level).
- You might want to start acquiring an Almighty mount. You may need it at later levels. They tend to be much more expensive than ele%, but can be useful to help cap stats when instances start nerfing you really hard.

**Secret Stones**
- Weapon - Lava Secret Stones (most of the time, at s20 some niche use cases may want Darkthunder!)
- Armor - Purple Secret Stones (upgraded from Orange)
- Reroll using reroll pots to get dmg%. Aim for the highest percent possible with current pots. dmg% rerolls (with the exception of 7% on lava main) are actually detail damage, which is an important scaling stat.

**Emblem**
- Highest ELE% possible on an emblem. Goes up to 8+17=25% with the base elemental emblems, but can be upgraded to be maxed out at 29%. You should be using one of the special types (eg Darkshadow Gaia Emblem) which guarantee the 8/12%.
- You can choose to work on other stats as well at this point, but elemental damage will *always* be the main objective for emblems.
- If you're rich, you should buy one of the Eido Blessing emblems, or the ones with the fancy swirly pentagon logos like [War Roar](https://www.aurakingdom-db.com/item/33339-war-roar-emblem), or [Mistress of Moonshadow](https://www.aurakingdom-db.com/item/23752-mistress-of-moonshadow-emblem). These are better than the base emblems if you need pen or armor piercing.

**Holy Spirit**

No new unlocks

**Note**: You need an orange base holy spirit to upgrade. If you upgrade to a gold, you will <u>lose all your fortification levels.</u>

| Low End | Mid End | High End |
| ------- | ------- | -------- |
| N/A | (+20~30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) | (+30) P2W HS (see below) |
| N/A | (+20~30) Ele specific HS (see below) | (+30) [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness) |

- [S25 Crimson Shadow Demon Drill of Darkness](https://www.aurakingdom-db.com/item/23137-crimson-shadow-demon-drill-of-darkness)
  - Besides the minor amount of pen, this gives a massive defensive debuff, along with 8% crit rate to you and 10% cdmg cap (stacking up to 3 times at +30).
  - The devil is in the details (aka the fortification buffs) here! 
  - The other s25 options are not as universal For instance [Golden Emperors Holy Fruit in Eden](https://www.aurakingdom-db.com/item/23139-golden-emperors-holy-fruit-in-eden) turns defensive.
- [S25 Purple Frost Piercing Cold Lotus](https://www.aurakingdom-db.com/item/23136-purple-frost-piercing-cold-lotus)
  - 10% phys dmg proc, but once again the devil is in the details. Tons of ice damage, works just like sizzling rainforest!
  - **Because of how it procs ice skill dmg, this is comparable if not better than Demon Drill of Darkness if you are an ice class!**
- [S15 Sizzling Rainforest](https://www.aurakingdom-db.com/item/22676-sizzling-rainforest)
  - 3k of def shred, 8% dmg received
  - **Because of how it procs flame skill dmg, this is comparable if not better than Demon Drill of Darkness if you are a flame class!**
- A comparison of the p2w holy spirits at +30, assuming you have all the prerequisites to fulfill procs (eg having manual). During calculations I assumed you have max archive or close to it, so pen is irrelevant
  - [Kurt's Revolver](https://www.aurakingdom-db.com/item/21655-kurts-revolver) provides 5% mspd, 5% dmg, much lower raw stats, 10% triple shot, 3% pen, 7% proc for 20% def shred, 7% proc for 20% skill damage
  - [Angel's Arrival](https://www.aurakingdom-db.com/item/22694-angels-arrival) provides 10% cdmg cap, 7% pen, a 10% proc for 5% cdmg/5% dmg, 10 armor piercing. It's other procs are healing/def related (so if you're a tank build this is better, but this is a dps guide). This is objectively worse than:
  - [Heart of Ruthless Hunting](https://www.aurakingdom-db.com/item/22991-heart-of-ruthless-hunting) provides 40% cdmg cap, 10% cdmg, 5% pen, 10% proc for 10% cdmg, 10% almighty, 5% proc for 20% received cdmg, and more procs that amount to up to 10+50% cdmg, 10+50% cdmg cap extra. **This is currently inaccessible though!**
  - [Elemental God Soul Crystals](https://www.aurakingdom-db.com/items?q%5Bs%5D=min_lvl_nl+desc&q%5Btype_id_eq%5D=1042&q%5Bquality_eq%5D=6&q%5Bmin_lvl_gteq%5D=115&q%5Bmin_lvl_lteq%5D=115) provide 15% main weapon damage, 10% d-dmg, a 10% proc for 5% ele skill dmg% stacking twice, and ele cdmg%, 5% elemental dmg, 1500 almighty, 10% pen
  - First, it's clear that Angel's Arrival is strictly worse than Heart of Ruthless Hunting. Kurt's Revolver actually continues to hold it's own because of it's triple shot and 20% skill damage chance. 
  - Which of Kurt's Revolver, Ruthless Hunting, and God Soul Crystals is best for you depends heavily on *which* archive you have, what class you are playing, due to how thin the margins are. For instance, if your class is built to stack zeals and you have significant skill damage, Ruthless Hunting becomes the best. If you are lacking elemental damage or primary % and have a fusion book, God Soul becomes the best. If you are overloaded on raw stats and have no zeal or skill dmg, Kurt's Revolver is best.
  - In general, `Ruthless Hunting > God Soul with fusion book > Kurt's Revolver > God Soul` assuming you have max archive, fusion book and you can crit (eg ruthless hunter isn't completely useless). However, I really don't want to say one is better than the others. It's so context specific that any one of the 3 is viable.

### Consumables

**Food:**
- [Thick Cheese Star Order Pizza](https://www.aurakingdom-db.com/item/35042-thick-cheese-star-order-pizza) provides 15% mspd and -15% crit damage received. Pairing this with Demon Drill can make you basically immortal lol
- [Double Delight Star Flower Grilled Beef Burger](https://www.aurakingdom-db.com/item/35046-double-delight-star-flower-grilled-beef-burger) provides 15% d-dmg
- [Salted Sakura Stuffed Mochi](https://www.aurakingdom-db.com/item/22893-salted-sakura-stuffed-mochi) provides 15% d-dmg
- [Special Crispy Pastry](https://www.aurakingdom-db.com/item/22463-special-crispy-pastry) provides MSPD and XP%
- [Sakura Honey Lava Cheese](https://www.aurakingdom-db.com/item/22897-sakura-honey-lava-cheese) provides 15% triple strike

**Drink:** 
- [Forgotten Age Fantasy Whiskey](https://www.aurakingdom-db.com/item/35030-forgotten-age-fantasy-whiskey) provides 15% triple strike
- [Herbal Peppermint Sparkling Water](https://www.aurakingdom-db.com/item/22881-herbal-peppermint-sparkling-water) provides 15% mspd, 7% crit rate
- [Petal Water](https://www.aurakingdom-db.com/item/19282-petal-water) provides Mounted MSPD and XP%
- [Sunshine Iced Tea](https://www.aurakingdom-db.com/item/19662-sunshine-iced-tea) 15% mspd
- [Spicy Ginger Soup](https://www.aurakingdom-db.com/item/21052-spicy-ginger-soup) 15% mspd
- [Lime Roasted Coffee](https://www.aurakingdom-db.com/item/21857-lime-roasted-coffee) 10% acc, 10% d-dmg
- [King Tree Juice](https://www.aurakingdom-db.com/item/22447-king-tree-juice) 15% triple strike
- [Fantasy Noble Herbal Tea](https://www.aurakingdom-db.com/item/22459-fantasy-noble-herbal-tea) 15% d-dmg

# The End!

This took me a longggg time to write, and is wordy, not concise, and a little messy to be honest. This means that I will have made mistakes and calculation errors! If you catch any, feel free to ping me on discord about it and let me know. 

Thank you to everyone who provided input on my guide, including Osibia, Goddess, Exdel, Kyzey, and those who talked about tech with me, including my friends Akamatsu and Hitori on the jp server, Luxeon on the OS server, and Lind on the TO server.