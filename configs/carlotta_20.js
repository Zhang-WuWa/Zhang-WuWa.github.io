练度流程列表['珂莱塔20'] = {
    标题: '珂莱塔25秒128.52w',
    声骸配置: {
        "声骸-1": "22%暴击+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%属伤+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "0",
        "声骸-重击伤害加成": "0",
        "声骸-共鸣技能伤害加成": "45",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20"
    },
    buff_列表: {

        '角色基础': { 属性: { 暴击: 5, 爆伤: 150 } },
        // '敌方': { 属性: { 敌方等级: parseInt(参数设置.敌方等级), 抗性: parseInt(参数设置.敌方抗性) } },
        '珂莱塔': { 属性: { 等级: 90, 基础攻击: 463 - 1, 大攻击: 12, 暴击: 8 } },
        '死与舞': { 属性: { 基础攻击: 500, 爆伤: 72, 大攻击: 12 } },
        '死与舞-缄默悼词': { 属性: { 增伤: 48 }, 标签: '共鸣技能', 描述: '施放变奏技能或共鸣解放时，自身共鸣技能伤害加成提升48%，持续5秒。' },
        '凌冽决断之心-2': { 属性: { 增伤: 12 }, 标签: '共鸣技能' },
        '凌冽决断之心-5-释放共鸣技能': { 属性: { 增伤: 22.5 }, 标签: '冷凝', 描述: '施放共鸣技能时，自身冷凝伤害提升22.5%，持续15秒' },
        '凌冽决断之心-5-释放共鸣解放': { 属性: { 增伤: 18 }, 标签: '共鸣技能', 描述: '施放共鸣解放时，自身共鸣技能伤害提升18%，持续5秒，可叠加2层' },
        '异构武装-冷凝': { 属性: { 增伤: 12 }, 标签: '冷凝' },
        '异构武装-共鸣技能': { 属性: { 增伤: 12 }, 标签: '共鸣技能' },

        '折枝-冷凝加深': { 属性: { 加深: 20 }, 标签: '冷凝', 描述: '持续14秒' },
        '折枝-共鸣技能加深': { 属性: { 加深: 25 }, 标签: '共鸣技能', 描述: '持续14秒' },

        '守岸人-领域': { 属性: { 暴击: 12.5, 爆伤: 25 }, 描述: '星域持续时间30秒' },
        '守岸人-延奏': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },

        '轻云出月': { 属性: { 大攻击: 22.5 }, 描述: '使用延奏技能后，下一个登场的共鸣者攻击提升22.5%，持续15秒' },
        '无常凶鹭': { 属性: { 增伤: 12 }, 描述: '下一个变奏登场的角色伤害提升12%，持续15秒。技能冷却：20秒' },

        '隐世回光': { 属性: { 大攻击: 15 }, 描述: '自身为友方提供治疗时，全队共鸣者攻击提升15%，持续30秒' },
        '无归的谬误': { 属性: { 大攻击: 10 }, 描述: '全队角色攻击提升10%，持续20秒。技能冷却：20秒' },

        // ...声骸属性,

        '解离': { 属性: { 减防: 18 }, 描述: '珂莱塔攻击携带解离效果的目标，造成伤害时忽视目标18%防御。变奏ZER都能触发' },
        '揭幕者': { 属性: { 倍率提升: 0.8 }, 标签: '揭幕者', 描述: '共鸣解放新浪潮时代、共鸣解放死兆、共鸣解放致死以终的伤害倍率提升80%' },

    },
    流程: function () {

        this.add_buff('角色基础')
        this.add_buff('敌方属性')
        this.add_buff('珂莱塔')
        this.add_buff('死与舞')
        this.add_buff('凌冽决断之心-2')
        this.add_buff('异构武装-冷凝')
        this.add_buff('异构武装-共鸣技能')

        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }

        this.add_buff('凌冽决断之心-5-释放共鸣技能')

        this.add_buff('守岸人-领域')
        this.add_buff('守岸人-延奏')
        this.add_buff('隐世回光')
        this.add_buff('无归的谬误')

        this.add_buff('折枝-冷凝加深')
        this.add_buff('折枝-共鸣技能加深')
        this.add_buff('轻云出月')
        this.add_buff('无常凶鹭')

        this.add_buff('解离')
        this.add_buff('死与舞-缄默悼词')

        this.add_action('变奏', 1.5000, '冷凝')

        this.add_action('E', 7.9213, '冷凝', '共鸣技能')

        this.add_buff('揭幕者')
        this.add_buff('死与舞-缄默悼词', -1)
        this.add_action('Z', 6.6657, '冷凝', '共鸣技能')

        this.add_buff('死与舞-缄默悼词')
        this.add_buff('凌冽决断之心-5-释放共鸣解放')
        this.add_action('R1', 4.0271, '冷凝', '共鸣技能', '揭幕者')

        this.add_buff('凌冽决断之心-5-释放共鸣解放')
        this.add_action('4R2', (1.8364 + 0.1450 * 4) * 4, '冷凝', '共鸣技能', '揭幕者')
        this.add_action('R3', 6.4433, '冷凝', '共鸣技能', '揭幕者')
        this.add_action('E', 7.9213, '冷凝', '共鸣技能')

        this.add_buff('折枝-冷凝加深', -1)
        this.add_buff('折枝-共鸣技能加深', -1)
        this.add_buff('无归的谬误', -1)
        this.add_buff('轻云出月', -1)
        this.add_buff('无常凶鹭', -1)

        this.add_action('Q', 4.0500, '冷凝')
        this.add_action('延奏', 7.9420, '冷凝')

    }

}