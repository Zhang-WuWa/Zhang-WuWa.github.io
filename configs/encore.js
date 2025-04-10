
练度流程列表['encore'] =
{
    标题: '安可153.79w 倍率114.19',
    声骸配置: {
        "声骸-1": "44%爆伤+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%攻击+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "18",
        "声骸-重击伤害加成": "0",
        "声骸-共鸣技能伤害加成": "0",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20"
    },
    // 声骸配置: {
    //     "声骸-1": "44%爆伤+150攻击",
    //     "声骸-2": "30%属伤+100攻击",
    //     "声骸-3": "30%攻击+100攻击",
    //     "声骸-4": "18%攻击+2280生命",
    //     "声骸-5": "18%攻击+2280生命",
    //     "声骸-暴击": "22.5",
    //     "声骸-爆伤": "78.6",
    //     "声骸-大攻击": "36.8",
    //     "声骸-小攻击": "80",
    //     "声骸-普攻伤害加成": "33.7",
    //     "声骸-重击伤害加成": "0",
    //     "声骸-共鸣技能伤害加成": "8.6",
    //     "声骸-共鸣解放伤害加成": "10.1",
    //     "敌方等级": "100",
    //     "敌方抗性": "20"
    // },
    buff_列表: {
        '角色基础': { 属性: { 暴击: 5, 爆伤: 150 } },
        // '敌方属性': { 属性: { 敌方等级: parseInt(参数设置.敌方等级), 抗性: parseInt(参数设置.敌方抗性) } },
        '安可': { 属性: { 等级: 90, 基础攻击: 425, 大攻击: 12, 增伤: 12 } },
        '安可-8.4攻': { 属性: { 大攻击: -8.4 }, 标签: '实战' },

        '安可-10增伤': { 属性: { 增伤: 10 }, 描述: '共鸣解放黑咩大暴走期间，安可的生命高于70%时，伤害提升10%。' },
        '安可-10增伤-10s': { 属性: { 增伤: 10 }, 描述: '施放共鸣技能热力羊咩或共鸣技能黑咩·狂热时，安可的热熔伤害加成提升10%，效果持续10秒。' },

        '掣傀之手': { 属性: { 基础攻击: 500, 暴击: 36, 增伤: 12 } },
        '掣傀之手-12攻-2/4': { 属性: { 大攻击: 12 }, 描述: '造成共鸣技能伤害时，自身攻击提升12%，可叠加2层，效果持续5秒。自身不在场时，该效果攻击额外提升12%' },

        '熔山裂谷2-10增伤': { 属性: { 增伤: 10 }, },
        '熔山裂谷4-30增伤': { 属性: { 增伤: 30 }, 描述: '使用共鸣技能时，热熔伤害提升30%，持续15秒' },

        '燎照之骑-12增伤': { 属性: { 增伤: 12 }, 标签: '普攻,拉表' },
        '燎照之骑-12普攻': { 属性: { 增伤: 12 }, 标签: '普攻,拉表' },

        '散华-38普攻加深-14s': { 属性: { 加深: 38 }, 标签: '普攻', 描述: '持续14秒' },
        '散华-20攻-20s-6链': { 属性: { 大攻击: 20 }, 描述: '引爆【冰棱】或【冰川】后，队伍中的角色攻击提升10%，持续20秒，可叠加2层。' },

        '守岸人-12.5暴击': { 属性: { 暴击: 12.5 }, 描述: '星域持续时间30秒' },
        '守岸人-25爆伤': { 属性: { 爆伤: 25 }, 描述: '星域持续时间30秒' },
        '守岸人-15加深': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },

        '轻云出月-22.5攻-15s': { 属性: { 大攻击: 22.5 }, 描述: '使用延奏技能后，下一个登场的共鸣者攻击提升22.5%，持续15秒' },
        '无常凶鹭-12增伤-15s': { 属性: { 增伤: 12 }, 描述: '下一个变奏登场的角色伤害提升12%，持续15秒。技能冷却：20秒' },

        '隐世回光-15攻-30s': { 属性: { 大攻击: 15 }, 描述: '自身为友方提供治疗时，全队共鸣者攻击提升15%，持续30秒' },
        '无归的谬误-10攻-20s': { 属性: { 大攻击: 10 }, 描述: '全队角色攻击提升10%，持续20秒。技能冷却：20秒' },

        // ...声骸属性,
        '声骸-实战': { 属性: { 爆伤: 44, 大攻击: 66, 小攻击: 350, 增伤: 30 }, 标签: '实战' },
        '声骸-实战-副词条': { 属性: { "暴击": 22.5, 爆伤: 78.6, 大攻击: 36.8, 小攻击: 80 }, 标签: '实战' },
        '声骸-实战-副词条-普攻': { 属性: { 增伤: 33.7 }, 标签: '普攻,实战' },
        '声骸-实战-副词条-共鸣技能': { 属性: { 增伤: 8.6 }, 标签: '共鸣技能,实战' },
        '声骸-实战-副词条-共鸣解放': { 属性: { 增伤: 10.1 }, 标签: '共鸣解放,实战' },

        '深塔-10抗': { 属性: { 抗性: -10 } },
        '深塔-6增伤': { 属性: { 增伤: 6 }, 标签: '实战', 描述: '角色释放声骸技能时，全队全属性伤害提升6%，最多叠加4层，同角色的同名声骸技能无法重复触发该效果。叠加至4层时，全队暴击伤害提升36%。' },

    },
    流程: function () {

        this.add_buff("角色基础")
        this.add_buff("敌方属性")
        this.add_buff("安可")
        this.add_buff("安可-8.4攻")
        this.add_buff("安可-10增伤-10s")
        this.add_buff("掣傀之手")
        this.add_buff("熔山裂谷2-10增伤")
        this.add_buff("熔山裂谷4-30增伤")

        this.add_buff("散华-38普攻加深-14s")
        this.add_buff("散华-20攻-20s-6链")
        this.add_buff("守岸人-12.5暴击")
        this.add_buff("守岸人-25爆伤")
        this.add_buff("守岸人-15加深")
        this.add_buff("轻云出月-22.5攻-15s")
        this.add_buff("无常凶鹭-12增伤-15s")
        this.add_buff("隐世回光-15攻-30s")
        this.add_buff("无归的谬误-10攻-20s")


        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }

        this.add_buff("深塔-10抗")
        this.add_buff("深塔-6增伤", 2)

        // 轻云暗鸟无归都是无延迟的
        // 延奏buff有0.7秒延迟
        // 散华变奏Q切人1.2秒
        // 安可变奏R 1.4秒
        // 散华变奏ZER 1.4秒

        // 轻云暗鸟 15-1.4-10=3.6秒 延奏两次伤害能吃,Q两次伤害能吃

        this.add_action('/check 变奏 10154', 1 / 1e4)
        this.add_action('变奏', 1.9881)

        this.add_buff("安可-10增伤")

        this.add_action('/check E3 6954', 0.6332 / 1e4, '共鸣技能')

        this.add_action('E3 E3', 0.6332 * 4 * 2, '共鸣技能')
        this.add_action('A4', 1.9401 * 3, '普攻')

        this.add_buff("掣傀之手-12攻-2/4", 2)

        // this.add_action('/check A1 15616', 0.9018 / 1e4, '普攻')
        // this.add_action('/check A2 9766', 0.5640 / 1e4, '普攻')
        // this.add_action('/check A3 11427', 0.6599 / 1e4, '普攻')
        this.add_action('/check A4 33594', 1.9401 / 1e4, '普攻')

        this.add_action('AAAA AAA AAAA', 0.9018 * 2 * 3 + 0.5640 * 3 * 3 + 0.6599 * 4 * 3 + 1.9401 * 3 * 2, '普攻')

        this.add_buff("安可-10增伤-10s", -1)

        this.add_buff("掣傀之手-12攻-2/4", 2)
        this.add_action('/check 延奏 10326', 1.7676 / 2 / 1e4)

        this.add_buff("掣傀之手-12攻-2/4", -2)
        this.add_buff("掣傀之手-12攻-2/4", -2)
        this.add_buff("深塔-6增伤", 1)

        this.add_action('/check 延奏 9216', 1.7676 / 2 / 1e4)

        this.add_action('/check Q 12639', 2.4240 / 2 / 1e4)
        this.add_action('/check Q 14745', 2.8280 / 2 / 1e4)

        this.add_action('Q', 2.4240)
        this.add_action('Q', 2.8280)

        this.add_buff("无常凶鹭-12增伤-15s", -1)

        this.add_action('Q', 2.8280)

        this.add_action('延奏', 1.7676 * 4)
        // this.add_action('E ', 0.7661 * 8, '共鸣技能')

        // 第二轮

        this.add_buff("无归的谬误-10攻-20s", -1)

        this.add_buff("安可-10增伤-10s")
        // 没打中
        this.add_buff("燎照之骑-12增伤")
        this.add_buff("燎照之骑-12普攻")


        this.add_action('变奏', 1.9881)

        this.add_action('/check E3 6954', 0.6332 / 1e4, '共鸣技能')

        this.add_action('E3 E3', 0.6332 * 4 * 2, '共鸣技能')

        this.add_action('A4', 1.9401 * 3, '普攻')
        this.add_buff("掣傀之手-12攻-2/4", 2)

        // this.add_action('/check A1 15616', 0.9018 / 1e4, '普攻')
        // this.add_action('/check A2 9766', 0.5640 / 1e4, '普攻')
        // this.add_action('/check A3 11427', 0.6599 / 1e4, '普攻')
        this.add_action('/check A4 31893', 1.9401 / 1e4, '普攻')

        this.add_action('AAAA AAA AAAA', 0.9018 * 2 * 3 + 0.5640 * 3 * 3 + 0.6599 * 4 * 3 + 1.9401 * 3 * 2, '普攻')

        // this.add_action('/check E ', 0.6618 / 1e4, '共鸣技能')
        // this.add_action('/check E ', 2.93 / 1e4, '共鸣技能')
        this.add_action('E ', 0.7661 * 8, '共鸣技能')

        this.add_action('/check 延奏 33594', 1.7676 / 1e4)
        this.add_action('延奏', 1.7676 * 4)

        console.log('buff情况', this.buff_总结)

    }

}