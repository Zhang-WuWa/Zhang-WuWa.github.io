
练度流程列表['菲比20'] =
{
    标题: '菲比实20词条96.43w',
    声骸配置: {
        "声骸-1": "44%爆伤+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%属伤+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "0",
        "声骸-重击伤害加成": "45",
        "声骸-共鸣技能伤害加成": "0",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20"
    },
    buff_列表: {
        '角色基础': { 属性: { 暴击: 5, 爆伤: 150 } },
        // '敌方属性': { 属性: { 敌方等级: parseInt(参数设置.敌方等级), 抗性: parseInt(参数设置.敌方抗性) } },
        '菲比': { 属性: { 等级: 90, 基础攻击: 412, 大攻击: 12, 爆伤: 16 } },

        '菲比-12增伤': { 属性: { 增伤: 12 } },
        '菲比-星辉256加深': { 属性: { 加深: 256 }, 标签: '星辉256' },

        // '椿-侵占-15普攻': { 属性: { 增伤: 15 }, 标签: '普攻', 描述: '普攻伤害加成提升15%，普攻和普攻蔓舞、普攻烬华蔓舞的抗打断能力提升。' },

        // '酣梦-倍率提升50%~100%': { 属性: { 倍率提升: 1.0 }, 标签: '酣梦' },

        '掣傀之手': { 属性: { 基础攻击: 500, 暴击: 36, 增伤: 12 } },
        '掣傀之手-12攻': { 属性: { 大攻击: 12 } },
        // '裁春-10普攻*3-14s-造成普攻伤害时': { 属性: { 增伤: 10 }, 标签: '普攻', 描述: '造成普攻伤害时，自身普攻伤害加成提升10%，持续14秒，每秒可触发1次，可叠加3层；' },
        // '裁春-40普攻-10s-协奏消耗时': { 属性: { 增伤: 40 }, 标签: '普攻', 描述: '自身的协奏能量消耗时，自身普攻伤害加成提升40%，持续10秒' },

        '2件套': { 属性: { 增伤: 10 }, 标签: '衍射' },
        '4件套-15光伤': { 属性: { 增伤: 15 }, 标签: '衍射' },
        '4件套-20暴击': { 属性: { 暴击: 20 }, 标签: '衍射' },
        // '沉日劫明-7.5湮灭*4-15s-普攻或重击时': { 属性: { 增伤: 7.5 }, 标签: '湮灭', 描述: '使用普攻或重击时，湮灭伤害提升7.5%，该效果可叠加四层，持续15秒' },
        '梦魇光鸟': { 属性: { 增伤: 12 }, 标签: '衍射' },
        // '梦魇·无冠者-12普攻': { 属性: { 增伤: 12 }, 标签: '普攻' },
        '梦魇光鸟-100增伤': { 属性: { 增伤: 100 }, 标签: '梦魇光鸟增伤' },

        // '散华-38普攻加深-14s': { 属性: { 加深: 38 }, 标签: '普攻', 描述: '持续14秒' },
        // '散华-20攻-20s-6链': { 属性: { 大攻击: 20 }, 描述: '引爆【冰棱】或【冰川】后，队伍中的角色攻击提升10%，持续20秒，可叠加2层。' },

        // '守岸人-12.5暴击': { 属性: { 暴击: 12.5 }, 描述: '星域持续时间30秒' },
        // '守岸人-25爆伤': { 属性: { 爆伤: 25 }, 描述: '星域持续时间30秒' },
        '维里奈-15加深': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },
        '维里奈-20攻': { 属性: { 大攻击: 20 } },


        '轻云出月-22.5攻-15s': { 属性: { 大攻击: 22.5 }, 描述: '使用延奏技能后，下一个登场的共鸣者攻击提升22.5%，持续15秒' },
        '无常凶鹭-12增伤-15s': { 属性: { 增伤: 12 }, 描述: '下一个变奏登场的角色伤害提升12%，持续15秒。技能冷却：20秒' },

        '隐世回光-15攻-30s': { 属性: { 大攻击: 15 }, 描述: '自身为友方提供治疗时，全队共鸣者攻击提升15%，持续30秒' },
        '无归的谬误-10攻-20s': { 属性: { 大攻击: 10 }, 描述: '全队角色攻击提升10%，持续20秒。技能冷却：20秒' },

        // ...声骸属性,

        '光主减抗': { 属性: { 抗性: -10 } }
        // '深塔-30攻': { 属性: { 大攻击: 30 }, 描述: '角色受到治疗时，全队攻击提升30%，持续20秒' },

    },
    流程: function () {

        this.add_buff('角色基础')
        this.add_buff('敌方属性')
        this.add_buff('菲比')
        this.add_buff('菲比-星辉256加深')
        this.add_buff('掣傀之手')

        this.add_buff('2件套')
        this.add_buff('梦魇光鸟')
        this.add_buff('梦魇光鸟-100增伤')
        this.add_buff('维里奈-15加深')
        this.add_buff('维里奈-20攻')
        this.add_buff('轻云出月-22.5攻-15s')
        this.add_buff('无常凶鹭-12增伤-15s')
        this.add_buff('隐世回光-15攻-30s')
        this.add_buff('无归的谬误-10攻-20s')

        this.add_buff('光主减抗')

        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }

        for (const key in this.buff_列表) {
            if (!key.startsWith('深塔'))
                continue
            this.add_buff(key)
        }

        this.add_action('变奏 约7422.9', 1, '衍射')

        this.add_buff('4件套-15光伤')
        this.add_buff('菲比-12增伤')

        this.add_action('圣祷赦罪 55719', 6.3819, '衍射', '重击')

        this.add_buff('4件套-20暴击')

        this.add_action('test E 5383', 0.5824 / 1e4, '衍射', '共鸣技能')
        this.add_action('E', 1.1648, '衍射', '共鸣技能')
        this.add_action('E', 1.1648, '衍射', '共鸣技能')
        this.add_action('E', 1.1648, '衍射', '共鸣技能')

        this.add_action('Z 约69902.1', 2.4807, '衍射', '重击', '星辉256')

        this.add_buff('掣傀之手-12攻', 2)

        this.add_action('R 135602', 14.2568, '衍射', '共鸣解放')
        this.add_action('Q 35869', 2.7360, '衍射', '梦魇光鸟增伤')

        this.add_action('A 约15318.6', 1.6694, '衍射', '普攻')
        this.add_action('A 约15318.6', 1.6694, '衍射', '普攻')
        this.add_action('折射 约7636.4', 0.8322, '衍射', '普攻')
        this.add_action('折射 约7636.4', 0.8322, '衍射', '普攻')
        this.add_action('夏弥尔之星 约26661.3', 2.9055, '衍射', '普攻')
        this.add_action('夏弥尔之星 约26661.3', 2.9055, '衍射', '普攻')

        this.add_action('test Z 25458', 0.8269 / 1e4, '衍射', '重击', '星辉256')
        this.add_action('Z 约76398.9', 2.4807, '衍射', '重击', '星辉256')
        this.add_action('Z 约76398.9', 2.4807, '衍射', '重击', '星辉256')
        this.add_action('Z 约76398.9', 2.4807, '衍射', '重击', '星辉256')

        this.add_buff('轻云出月-22.5攻-15s', -1)
        this.add_buff('无常凶鹭-12增伤-15s', -1)

        this.add_buff('掣傀之手-12攻', 2)

        this.add_action('test 延奏 20514', 2.3448 / 1e4, '衍射')
        this.add_action('test 延奏 约164134.1', 18.7586, '衍射')


    }

}